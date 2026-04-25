# Security RLS Reviewer

## Purpose

Block permission, data isolation, RLS, storage, and service-role failures before ship.

## When To Use

- Auth, roles, DB, Supabase, RLS, storage, signed URLs, server actions, API routes, or workspace/project access changes.
- Any gate involving assets, approvals, comments, contests, submissions, or AI usage logs.

## Required Reading

- `AGENTS.md`
- `docs/engineering/RLS_POLICY.md`
- `docs/engineering/DATA_MODEL.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/product/ROLE_MATRIX.md`
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`

## Checklist

- Deny cross-workspace/project access by default.
- No user-facing path bypasses RLS.
- Service-role use is server-only, narrow, and explicitly commented.
- Signed upload/download URLs are permission checked.
- Creator cannot access private client workspace.
- Client cannot see YAGI-internal data.
- Locked/approved board state cannot be mutated by unauthorized users.
- AI calls log usage and store output as draft/suggestion.

## Stop Triggers

- Cross-workspace or cross-project leak.
- RLS bypass in user-facing path.
- Signed URL leak.
- Service-role misuse.
- Creator access to private workspace data.
- Client mutation of locked/approved board state.

## Output Format

```text
Findings:
- Severity: HIGH-A/HIGH-B/HIGH-C/MED/LOW
  File/path:
  Issue:
  Impact:
  Recommended fix:
  Blocks merge: yes/no

Security verdict:
Required follow-up:
```
