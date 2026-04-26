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
5. Run typecheck, lint, build, and relevant smoke checks at each implementation gate.

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
- Use specialist reviewers only for changed surfaces.
- Use `docs/agents/RELEASE_MANAGER.md` before commit and push.
- Use `prompts/commands/*.md` as copy-paste Codex prompts for repeatable gates.

Do not run uncontrolled parallel autopilot. Keep each gate sequential, bounded, reviewed, and shippable.

## MVP-speed operating mode

Use MVP Security Mode during MVP development.

Security should prevent real cross-user leaks, private file leaks, service-role exposure, and approval/version corruption. It should not create enterprise-heavy process for theoretical risks that have no reachable user-facing path.

Do not require all reviewers for every gate:
- Security RLS Reviewer only for DB/RLS/auth/storage/signed URL/private-public boundary changes.
- Design Director only for UI/copy/design changes.
- Docs Keeper only for docs/prompts/ADR changes.
- QA Reviewer for final smoke checks or changed behavior.
- Engineering Reviewer for non-trivial implementation, architecture, or build risk.

## Token-efficient Codex use

- Read only relevant docs for the current gate.
- Prefer current-diff review after Gate 0.
- Keep prompts under 120 lines when possible.
- Avoid rerunning full repo exploration unless architecture changed.
- Avoid broad refactors.
- Keep each Codex task under 8 files when possible.
- Prefer micro-slices over whole-gate implementation.

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

Default read order for major gates:
1. `AGENTS.md`
2. `docs/agents/README.md`
3. Current gate prompt under `prompts/`
4. Only the product/design/engineering docs relevant to the current gate

Do not reread unrelated docs on every micro-slice unless the architecture or product scope changed.

## Core rule

Codex is the implementation agent, not the product strategist. The strategy and constraints live in these files. If code conflicts with these docs, update the docs intentionally through an ADR before changing product direction.
