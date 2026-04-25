# yagi-retro

Copy into Codex:

```text
Read AGENTS.md, docs/agents/DOCS_KEEPER.md, docs/agents/RELEASE_MANAGER.md, docs/engineering/IMPLEMENTATION_PLAN.md, and README_CODEX_WORKFLOW.md.

Act as Docs Keeper after a shipped gate.

Do not implement product features.
Review the shipped gate and identify docs or workflow updates only.

Gate shipped:
[PASTE GATE SUMMARY OR COMMIT]

Check:
- Did implementation match the source specs?
- Are ADRs needed for decisions made during the gate?
- Did prompts/playbooks need clarification?
- Are follow-up risks recorded?
- Does the next gate have a clear recommended command?

Output:
- Docs changed or recommended
- ADR needed: yes/no
- Workflow lessons
- Follow-up risks
- Recommended next command
```
