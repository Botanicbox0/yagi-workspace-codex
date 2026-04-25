# yagi-build-gate

Copy into Codex:

```text
Read AGENTS.md, docs/agents/BUILDER.md, docs/playbooks/03_build_gate.md, docs/engineering/IMPLEMENTATION_PLAN.md, and the specs named below.

Act as Builder.

Implement only this approved gate scope:
[PASTE APPROVED PLAN HERE]

Required specs:
[LIST SPEC FILES]

Non-goals:
[LIST NON-GOALS]

Hard constraints:
- Preserve ko default.
- Do not add a landing page.
- Do not add anonymous voter/public voting behavior.
- Keep private workspace and challenge/creator surfaces separate.
- AI output must remain assistive draft/suggestion until human acceptance.
- Never bypass RLS in user-facing paths.

After implementation, run available scripts:
- pnpm exec tsc --noEmit
- pnpm lint
- pnpm build

Finish with:
- Summary
- Files changed
- Commands run
- Smoke tests
- Known gaps
- Ready for review: yes/no
```
