# Prompt 03 — Implement Asset Versioning

```text
Implement Gate 5 from docs/engineering/IMPLEMENTATION_PLAN.md.

Before coding, read:
- docs/product/CANVAS_BOARD_SPEC.md
- docs/engineering/DATA_MODEL.md
- docs/engineering/RLS_POLICY.md
- docs/engineering/TESTING_STRATEGY.md

Scope:
- Cloudflare R2 signed upload flow
- assets and asset_versions persistence
- asset usage link to board node/project/submission
- version history inspector
- approval state for asset versions
- permission checks for signed URLs

Do not expose permanent public URLs for private assets.
Do not bypass RLS in user-facing paths.
Run required commands and RLS smoke tests.
```
