# 06 Security Review

Use for auth, DB, RLS, storage, role, signed URL, and server-side access changes.

## Agent

Security RLS Reviewer.

## Required Reading

- `docs/agents/SECURITY_RLS_REVIEWER.md`
- `docs/engineering/RLS_POLICY.md`
- `docs/engineering/DATA_MODEL.md`
- `docs/engineering/TESTING_STRATEGY.md`
- `docs/product/ROLE_MATRIX.md`

## Steps

1. Identify all user-facing access paths.
2. Check RLS and app-layer role gates.
3. Check service-role usage.
4. Check cross-workspace/project isolation.
5. Check signed URL permission boundaries.
6. Check locked approval mutation rules.
7. Require RLS tests or documented manual SQL checks.

## Output

```text
Security verdict:
Findings:
Required tests:
Manual checks:
Blocks ship: yes/no
```
