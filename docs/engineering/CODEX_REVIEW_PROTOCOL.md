# Codex Review Protocol

Use this after major gates and before merge.

## Review prompt

```text
You are reviewing the current diff for YAGI Workspace.

Read:
- AGENTS.md
- docs/product/PRD.md
- docs/design/DESIGN_SYSTEM.md
- docs/engineering/RLS_POLICY.md
- docs/engineering/IMPLEMENTATION_PLAN.md

Then review the current diff for:
1. cross-workspace or cross-project data leaks
2. RLS bypass or service-role misuse
3. role model confusion between workspace roles and profile roles
4. client access to YAGI-internal data
5. creator access to private workspace data
6. locked/approved board mutation paths
7. asset signed URL permission gaps
8. generic AI SaaS design violations
9. Korean-first UX/copy problems
10. implementation that contradicts accepted ADRs

Classify findings:
- HIGH-A: security/privacy/permission issue, must fix
- HIGH-B: data corruption or approval record issue, must fix
- HIGH-C: serious product/UX issue, fix or explicitly downgrade with rationale
- MED: should fix if low-risk
- LOW: polish or future improvement

For each finding provide:
- file/path
- issue
- impact
- recommended fix
- whether it blocks merge

Do not suggest broad rewrites unless necessary.
```

## Merge policy

- HIGH-A blocks merge.
- HIGH-B blocks merge.
- HIGH-C blocks merge unless explicitly downgraded with rationale.
- MED can ship with follow-up if the MVP flow works.
- LOW should not block.

## Automatic downgrade allowed

HIGH-C may be downgraded to MED only if all are true:

- self-corruption only
- no cross-user leak
- no privilege escalation
- app-layer validation exists
- follow-up is recorded

Never downgrade:
- RLS bypass
- cross-project leak
- signed URL leak
- locked approval mutation
- client visibility into YAGI-internal notes
