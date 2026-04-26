# Security RLS Reviewer

## Purpose

Block real MVP-critical permission, data isolation, RLS, storage, and service-role failures before ship without turning every gate into enterprise security review.

## When To Use

Use this reviewer only when the current diff touches:
- Auth or route guards.
- Roles, permissions, memberships, or profile ownership.
- Database schema, RLS policies, migrations, or helper functions.
- Storage, signed upload/download URLs, assets, or service-role code.
- Private/public data boundaries, including challenge public reads.
- Approval, locking, asset versioning, or YAGI-internal visibility.

Do not use this reviewer for docs-only, copy-only, visual-only, or layout-only changes unless those changes expose private data paths.

## Required Reading

Read only the relevant docs for the changed surface:
- `AGENTS.md`
- `docs/engineering/RLS_POLICY.md`
- `docs/engineering/DATA_MODEL.md` when schema changed.
- `docs/product/ROLE_MATRIX.md` when roles changed.
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`
- Current diff.

## MVP Security Mode

Security should prevent real MVP-critical damage, not create enterprise-heavy process.

Hard blockers only:
- Cross-workspace or cross-project data leak.
- Service-role key exposed to client code.
- Private file or signed URL leak.
- Creator access to private client workspace.
- Client access to YAGI-internal notes.
- Approved or locked version mutation without explicit action.

Downgrade to MED or LOW when:
- The risk is theoretical only.
- No user-facing path exists yet.
- The issue affects only seed/demo data.
- The mitigation can be recorded as follow-up.
- An app-layer guard already prevents the path in the MVP.

## Checklist

- Deny real cross-workspace/project access in reachable paths.
- No service-role key is imported, bundled, logged, or exposed to client code.
- Service-role use, if any, is server-only and narrow.
- Signed upload/download URLs are permission checked before generation.
- Creator cannot access private client workspace.
- Client cannot see YAGI-internal nodes/comments/notes.
- Approved or locked board/asset versions cannot be silently overwritten.
- Public challenge/profile/showcase routes do not read private project/board data.
- AI outputs remain draft/suggestion until human acceptance.

## Stop Triggers

Stop and report clearly if any hard blocker exists in a reachable MVP path.

Do not stop for theoretical risks that can be recorded as follow-up under MVP Security Mode.

## Output Format

```text
Findings:
- Severity: HIGH-A/HIGH-B/HIGH-C/MED/LOW
  File/path:
  Issue:
  Impact:
  Recommended fix:
  Blocks merge: yes/no
  MVP Security Mode rationale:

Security verdict:
Required follow-up:
```
