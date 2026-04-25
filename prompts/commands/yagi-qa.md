# yagi-qa

Copy into Codex:

```text
Read AGENTS.md, docs/agents/QA_REVIEWER.md, docs/playbooks/03_build_gate.md, docs/playbooks/07_ship.md, docs/engineering/IMPLEMENTATION_PLAN.md, and docs/engineering/TESTING_STRATEGY.md.

Act as QA Reviewer.

Review the current gate output and run applicable verification. Do not implement product features.

Gate:
[PASTE GATE SUMMARY HERE]

Run available scripts:
- pnpm exec tsc --noEmit
- pnpm lint
- pnpm build

Add focused smoke checks for touched surfaces:
- role gating
- RLS isolation if data/auth changed
- asset upload/versioning if storage changed
- canvas autosave/snapshot if canvas changed
- contest submission validation if contest changed
- Korean IME if editor/canvas text changed
- visual QA if UI changed

Output:
- Commands
- Smoke tests
- Pass/fail
- Untested areas
- Blocks ship: yes/no
```
