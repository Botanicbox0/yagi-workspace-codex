# Codex Review Protocol

Use this after major gates and before merge.

## MVP Security Mode

YAGI is in MVP-speed development. Reviews should prevent real user/data damage without creating enterprise-heavy process.

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

Never downgrade an actual reachable cross-user leak, service-role exposure, private file leak, or approval/version corruption path.

## Reviewer Selection

Do not require all reviewers for every gate.

- Security RLS Reviewer: only for DB/RLS/auth/storage/signed URL/private-public boundary changes.
- Design Director: only for UI, visual system, layout, and Korean copy changes.
- Docs Keeper: only for docs, prompts, playbooks, ADRs, and workflow changes.
- QA Reviewer: final smoke checks or changed behavior that needs verification.
- Engineering Reviewer: shared architecture, build risk, maintainability, or non-trivial implementation changes.

## Review prompt

```text
You are reviewing the current diff for YAGI Workspace.

Read only the docs relevant to the changed surface.
Prefer current-diff review over full-repo review unless architecture changed.

Check applicable items:
1. cross-workspace or cross-project data leaks
2. RLS bypass or service-role misuse
3. role model confusion between workspace roles and profile roles
4. client access to YAGI-internal data
5. creator access to private workspace data
6. locked/approved board or asset version mutation paths
7. asset signed URL permission gaps
8. generic AI SaaS design violations
9. Korean-first UX/copy problems
10. implementation that contradicts accepted ADRs

Classify findings:
- HIGH-A: actual security/privacy/permission issue in a reachable path; must fix.
- HIGH-B: actual data corruption or approval/version record issue in a reachable path; must fix.
- HIGH-C: serious product/UX issue; fix or explicitly downgrade with rationale.
- MED: should fix if low-risk, or record as follow-up.
- LOW: polish or future improvement.

For each finding provide:
- file/path
- issue
- impact
- recommended fix
- whether it blocks merge
- MVP Security Mode rationale when downgraded

Do not suggest broad rewrites unless necessary.
```

## Merge policy

- HIGH-A blocks merge.
- HIGH-B blocks merge.
- HIGH-C blocks merge unless explicitly downgraded with rationale.
- MED can ship with follow-up if the MVP flow works.
- LOW should not block.

## Automatic downgrade allowed

HIGH-C or security-adjacent findings may be downgraded to MED only if all are true:
- no cross-user leak
- no service-role exposure
- no private file/signed URL leak
- no privilege escalation in a reachable path
- no approved/locked version corruption in a reachable path
- app-layer validation or current route structure prevents the path in MVP
- follow-up is recorded

Never downgrade:
- actual RLS bypass in a user-facing path
- actual cross-project or cross-workspace leak
- actual signed URL/private file leak
- actual locked approval/version mutation path
- actual client visibility into YAGI-internal notes
