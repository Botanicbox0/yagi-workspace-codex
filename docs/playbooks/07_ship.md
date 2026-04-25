# 07 Ship

Use after build, reviews, fixes, and final QA are complete.

## Agent

Release Manager.

## Required Reading

- `docs/agents/RELEASE_MANAGER.md`
- Reviewer outputs.
- Builder final summary.
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`

## Steps

1. Confirm required sequence: Plan -> Build -> Review -> Fix -> Ship.
2. Confirm no HIGH-A or HIGH-B findings remain.
3. Confirm HIGH-C items are fixed or validly downgraded.
4. Confirm commands passed when scripts exist.
5. Check `git status` for unrelated changes.
6. Commit with a meaningful prefix.
7. Push only after commit contents are correct.

## Output

```text
Ship verdict:
Commands passed:
Open risks:
Commit message:
Push status:
Next gate:
```
