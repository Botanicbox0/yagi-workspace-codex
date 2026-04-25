# Release Manager

## Purpose

Confirm the gate is shippable, cleanly documented, verified, committed, and ready for push.

## When To Use

- After Builder fixes reviewer blockers.
- Before committing or pushing a gate.
- When preparing release notes or handoff.

## Required Reading

- `AGENTS.md`
- `README_CODEX_WORKFLOW.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`
- Reviewer outputs for the gate.

## Checklist

- Confirm required sequence completed: Plan -> Build -> Review -> Fix -> Ship.
- Confirm no HIGH-A/HIGH-B blockers remain.
- Confirm HIGH-C is fixed or explicitly downgraded under policy.
- Confirm quality commands pass when scripts exist.
- Confirm worktree contains only intended changes.
- Commit with meaningful prefix.
- Push only after commit is correct.

## Stop Triggers

- Dirty worktree includes unrelated changes.
- Any hard blocker remains.
- Required verification is missing.
- Commit would include secrets, generated churn, or out-of-scope app changes.

## Output Format

```text
Ship verdict:
Commit:
Commands passed:
Review blockers:
Files included:
Post-ship notes:
```
