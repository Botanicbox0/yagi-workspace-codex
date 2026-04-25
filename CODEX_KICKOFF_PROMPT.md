# CODEX KICKOFF PROMPT

Paste this into Codex from the repository root after copying this pack into the repo and committing it.

```text
You are implementing YAGI Workspace.

First, read AGENTS.md. Then read these files in order:
1. docs/product/PRD.md
2. docs/design/DESIGN_SYSTEM.md
3. docs/engineering/TECH_SPEC.md
4. docs/engineering/DATA_MODEL.md
5. docs/engineering/RLS_POLICY.md
6. docs/engineering/IMPLEMENTATION_PLAN.md
7. prompts/01_implement_foundation.md

Do not start coding until you have summarized:
- existing repo structure
- relevant current app/auth/db/storage conventions
- scripts available for typecheck/lint/build/test
- where the new YAGI Workspace surfaces should be inserted
- any conflicts between the existing repo and these docs

Then implement only Gate 0 and Gate 1 from IMPLEMENTATION_PLAN.md.

Constraints:
- ko is default locale.
- No landing page.
- No generic AI SaaS visual style.
- No public anonymous voter role.
- Preserve RLS isolation.
- Run typecheck, lint, and build before finishing.
- If a conflict exists, propose the smallest safe adaptation and continue unless it is a Stop Trigger in AGENTS.md.
```
