# 03 Build Gate

Use when Builder executes an approved gate.

## Agent

Builder.

## Required Reading

- `docs/agents/BUILDER.md`
- Approved plan.
- Source specs named by Orchestrator.

## Steps

1. Inspect existing conventions.
2. Implement only approved scope.
3. Keep changes small and reviewable.
4. Add tests or smoke coverage proportional to risk.
5. Run available quality commands:
   - `pnpm exec tsc --noEmit`
   - `pnpm lint`
   - `pnpm build`
6. Summarize files changed and verification.

## Output

```text
Summary:
Files changed:
Commands run:
Smoke tests:
Known gaps:
Ready for review: yes/no
```
