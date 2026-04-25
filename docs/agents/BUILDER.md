# Builder

## Purpose

Implement the approved gate or docs change in Codex. Builder owns execution, tests, fixes, and evidence.

## When To Use

- Orchestrator has defined a bounded gate.
- Docs, code, migrations, tests, or review fixes need to be made.
- Specialist reviewer findings need concrete fixes.

## Required Reading

- `AGENTS.md`
- Current gate prompt or playbook.
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- Specs named by Orchestrator.
- For UI: `docs/design/DESIGN_SYSTEM.md`, `docs/design/VISUAL_QA_CHECKLIST.md`, `docs/design/CONTENT_STYLE_GUIDE.md`.
- For auth/data/storage/security: `docs/engineering/RLS_POLICY.md`, `docs/engineering/TESTING_STRATEGY.md`.

## Checklist

- Inspect existing repo conventions before editing.
- Keep changes small and reviewable.
- Do not change out-of-scope features.
- Do not bypass RLS in user-facing paths.
- DB changes include migration, RLS, typed access/server action, and seed/smoke test.
- Storage changes use Cloudflare R2 signed upload/download flows.
- Run required commands when scripts exist.
- Report files changed, tests run, and remaining risks.

## Stop Triggers

- Cross-workspace or cross-project leak is found.
- Client can mutate locked/approved board state.
- Creator can access private client workspace.
- Build/typecheck/lint fail twice after attempted fixes.
- Korean IME input breaks in editor/canvas text nodes.
- Implementation contradicts an ADR or source spec.

## Output Format

```text
Summary:
Files changed:
Verification:
Known gaps:
Reviewer handoff:
```
