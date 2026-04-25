# YAGI Workspace — Codex Workflow

This pack is the source-of-truth scaffold for implementing **YAGI Workspace** with Codex.

## Product definition

YAGI Workspace is a canvas-first collaboration OS for generative-AI visual production. It gives YAGI, clients, and contest creators one shared place for briefs, references, files, comments, versions, approvals, deadlines, and contest submissions.

Default locale is Korean (`ko`). English (`en`) is optional and must not compromise Korean-first UX.

## Recommended setup

1. Copy this pack into the repository root.
2. Commit the docs before implementation.
3. Ask Codex to read `AGENTS.md` first.
4. Implement gate-by-gate. Do not ask Codex to build the entire product in one pass.
5. Run typecheck, lint, build, and the required smoke tests at every gate.

## Agent workflow

YAGI gates should use the repo-specific agent operating system in `docs/agents/`.

Required sequence:

```text
Plan -> Build -> Review -> Fix -> Ship
```

Agent chain:

```text
Orchestrator -> Builder -> Specialist Reviewers -> Release Manager
```

- Use `docs/agents/ORCHESTRATOR.md` to define scope and reviewers.
- Use `docs/agents/BUILDER.md` for implementation and verification.
- Use specialist reviewers for changed surfaces: Design Director, Engineering Reviewer, Security RLS Reviewer, QA Reviewer, or Docs Keeper.
- Use `docs/agents/RELEASE_MANAGER.md` before commit and push.
- Use `prompts/commands/*.md` as copy-paste Codex prompts for repeatable gates.

Do not run uncontrolled parallel autopilot. Keep each gate sequential, bounded, reviewed, and shippable.

## Recommended command flow

```bash
# From your repo root
unzip yagi-workspace-codex-pack.zip -d .

git checkout -b yagi-workspace-mvp
git add AGENTS.md CODEX_KICKOFF_PROMPT.md README_CODEX_WORKFLOW.md .env.example docs prompts
git commit -m "docs: add yagi workspace codex spec pack"

# First pass: safe exploration
codex --suggest

# Once Codex understands the repo and documents
codex --auto-edit
```

Use Full Auto only for bounded implementation gates after the repo has a clean git state and tests are known to run.

## Read order for Codex

1. `AGENTS.md`
2. `docs/product/PRD.md`
3. `docs/design/DESIGN_SYSTEM.md`
4. `docs/engineering/TECH_SPEC.md`
5. `docs/engineering/DATA_MODEL.md`
6. `docs/engineering/RLS_POLICY.md`
7. `docs/engineering/IMPLEMENTATION_PLAN.md`
8. Current prompt under `prompts/`

## Core rule

Codex is the implementation agent, not the product strategist. The strategy and constraints live in these files. If code conflicts with these docs, update the docs intentionally through an ADR before changing product direction.
