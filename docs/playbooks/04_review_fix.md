# 04 Review Fix

Use after specialist reviewers return findings.

## Agent

Builder, guided by Orchestrator.

## Required Reading

- Reviewer outputs.
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`
- Relevant source specs.

## Steps

1. Sort findings by severity.
2. Fix HIGH-A and HIGH-B first.
3. Fix HIGH-C or document allowed downgrade rationale.
4. Fix MED when low risk and aligned with the gate.
5. Re-run relevant commands and smoke tests.
6. Return fixed diff to reviewers if blockers changed security, permissions, or core UX.

## Output

```text
Fixed findings:
Deferred findings:
Downgrade rationale:
Commands run:
Remaining blockers:
Ready for ship review: yes/no
```
