# Role Matrix

## 1. Role model principle

Separate **workspace roles** from **profile roles**.

A user can be:
- a YAGI admin in the private app,
- a client member in a workspace,
- and a creator with a public profile.

Do not overload one `role` field for all contexts.

## 2. Role categories

### Workspace roles

- `yagi_admin`
- `yagi_member`
- `client_admin`
- `client_member`

### Profile roles

- `creator`
- `studio`
- `observer`

`observer` exists only for minimal logged-in profiles if needed. It is not Role 4 public voter.

## 3. Access matrix

| Capability | yagi_admin | yagi_member | client_admin | client_member | creator |
|---|---:|---:|---:|---:|---:|
| View all workspaces | Yes | Yes | No | No | No |
| View assigned workspace | Yes | Yes | Yes | Yes | No |
| Create client workspace | Yes | Yes | No | No | No |
| Invite client | Yes | Yes | Limited | No | No |
| Create project | Yes | Yes | Yes | Yes | No |
| Edit project stage | Yes | Yes | Limited | Limited | No |
| Upload project assets | Yes | Yes | Yes | Yes | No |
| Comment on project board | Yes | Yes | Yes | Yes | No |
| Approve final deliverable | Yes | Yes | Yes | Limited | No |
| Lock/unlock board | Yes | Yes | No | No | No |
| Create contest | Yes | Yes | Request only | Request only | No |
| Publish contest | Yes | Yes | No | No | No |
| Submit contest entry | Yes | Yes | No | No | Yes |
| Judge contest | Yes | Yes | Optional invited jury | Optional invited jury | No |
| Manage creator profile | Own only | Own only | Own only | Own only | Own only |

## 4. Route-level implications

Private app routes under `/[locale]/app/*` require authenticated workspace access.

Public or semi-public routes:
- `/[locale]/challenges`
- `/[locale]/challenges/[slug]`
- `/[locale]/u/[handle]`
- `/[locale]/showcase/[slug]`

Admin routes:
- `/[locale]/app/admin/*`

## 5. Auth rules

- `@yagiworkshop.xyz` email can be auto-classified as YAGI internal, but permissions must still be represented in database roles.
- Never grant admin purely from client-side email checks.
- Use server-side checks and RLS.
- Client users are invite-based in MVP.
- Creator users can self-register only for contest participation if the product flow requires it.

## 6. Dangerous states to prevent

- Creator can access client project board.
- Client can access another client workspace.
- Client can mutate YAGI-only internal review notes.
- Client can change contest judging configuration.
- Client can mutate approved/locked deliverable versions.
- YAGI service role accidentally leaks private board data to public contest pages.
