# RLS Policy

## 1. Security principle

Every private row belongs to a workspace, project, contest, submission, or profile scope.

Deny by default. Grant access only through explicit membership, ownership, or public visibility.

## 2. Critical boundaries

### Workspace boundary

Clients can access only their own workspace/project rows.

### Project boundary

Project board, comments, approvals, and assets must be scoped to project membership.

### Contest boundary

Public contest pages can read only published contest data and accepted/public submissions.

### Creator boundary

Creators can manage only their own profiles and submissions unless YAGI grants admin access.

### YAGI boundary

YAGI admins can manage all operational data, but this must be represented as DB permissions and server checks, not client-side email checks.

## 3. Helper functions

Use helper functions if repo convention allows:

```sql
is_yagi_admin(user_id uuid) returns boolean
is_workspace_member(workspace_id uuid, user_id uuid) returns boolean
has_workspace_role(workspace_id uuid, user_id uuid, roles text[]) returns boolean
is_project_member(project_id uuid, user_id uuid) returns boolean
can_view_project(project_id uuid, user_id uuid) returns boolean
can_edit_project(project_id uuid, user_id uuid) returns boolean
owns_creator_profile(profile_id uuid, user_id uuid) returns boolean
```

## 4. Policy examples

### projects

Read:
- YAGI admin
- workspace member
- project member

Write:
- YAGI admin
- YAGI member
- client admin/member only for allowed fields and only before lock/approval constraints

### boards

Read:
- project members
- YAGI admin

Write:
- YAGI admin/member
- client members only on shared board areas and unlocked nodes

### board_nodes

Read:
- shared nodes visible to project members
- yagi_internal nodes visible only to YAGI roles

Write:
- node creator before lock
- YAGI roles
- clients only for shared/unlocked nodes

### asset_versions

Read:
- users who can read the owning context
- public users only if asset version is explicitly public/showcase-safe

Write:
- users who can upload to owning context

### contests

Read:
- public if status in `open | closed | judging | winner_selected | archived` and visibility allows
- YAGI admin/member always
- client owner if linked

Write:
- YAGI admin/member

### contest_submissions

Read:
- submission owner
- YAGI admin/member
- public only if submission status allows display

Write:
- creator owner while draft
- YAGI admin/member for status changes

## 5. Service role

Service role can be used only for:

- signed URL creation
- background cleanup
- trusted admin actions
- system email/event processing

Every service-role path must:
- run server-side only
- validate the current user or cron secret
- avoid returning private data beyond the requested context
- include comments explaining why service role is necessary

## 6. Tests

Required RLS tests:

- client A cannot read client B project
- creator cannot read private project
- client cannot read yagi_internal node
- client cannot mutate locked board node
- creator can edit own draft submission
- creator cannot edit submitted entry unless reopened
- public can read published contest but not private admin fields
- signed URL endpoint refuses unauthorized asset access

## 7. High severity issues

Treat these as hard stop:

- cross-workspace data leak
- cross-project board node leak
- private R2 signed URL leak
- client access to YAGI internal notes
- creator access to client project
- mutation of approved asset/version without audit log
