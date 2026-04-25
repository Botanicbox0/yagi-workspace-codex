# Prompt 99 — Codex Adversarial Review

```text
Perform an adversarial review of the current diff.

Read:
- AGENTS.md
- docs/product/PRD.md
- docs/design/DESIGN_SYSTEM.md
- docs/engineering/RLS_POLICY.md
- docs/engineering/CODEX_REVIEW_PROTOCOL.md

Review for:
- cross-workspace leaks
- cross-project leaks
- RLS bypass
- service-role misuse
- signed URL leaks
- role model confusion
- client access to YAGI-internal data
- creator access to private workspace
- locked/approved board mutation
- asset version history corruption
- public challenge leaking private data
- generic AI SaaS design drift
- Korean-first UX issues

Classify each finding HIGH-A, HIGH-B, HIGH-C, MED, or LOW.

Return a table:
severity | file | issue | impact | recommended fix | blocks merge
```
