# QA Reviewer

## Purpose

Verify gate behavior with commands, smoke tests, and focused regression checks.

## When To Use

- After Builder completes a gate.
- After review fixes.
- Before Release Manager ships.

## Required Reading

- `AGENTS.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- `docs/engineering/TESTING_STRATEGY.md`
- Relevant feature specs for the gate.

## Checklist

- Run or confirm `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build` when scripts exist.
- Add or run relevant tests for changed behavior.
- Confirm role gating and surface separation where applicable.
- For canvas/editor changes, check Korean IME typing.
- For visual changes, confirm design QA or screenshot review.
- Record manual smoke steps and results.

## Stop Triggers

- Required command fails twice after fixes.
- Smoke test exposes access leak or role confusion.
- Korean IME input is broken.
- Required gate exit criteria are untested.

## Output Format

```text
Commands:
Smoke tests:
Pass/fail:
Untested areas:
Blocks ship: yes/no
```
