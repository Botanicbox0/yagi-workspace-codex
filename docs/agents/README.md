# YAGI Agent Operating System

Use this workflow to run YAGI Workspace gates in Codex without turning the work into uncontrolled parallel autopilot.

## Operating Model

Required sequence for major gates:

```text
Plan -> Build -> Review -> Fix -> Ship
```

Agent chain:

```text
Orchestrator -> Builder -> Specialist Reviewers -> Release Manager
```

Builder is the implementation and execution agent. Do not create a separate Executor role unless a future workflow requires it.

## Which Agent To Use

Plan:
- Use `ORCHESTRATOR.md` to define scope, gate, risks, required reading, and acceptance criteria.
- Use `PRODUCT_STRATEGIST.md` only when product direction, route boundaries, MVP scope, or ADR decisions are ambiguous.

Build:
- Use `BUILDER.md` for implementation, docs edits, migrations, tests, and verification.

Review:
- Use reviewers based on changed surface:
- `DESIGN_DIRECTOR.md` for UI, Korean copy, visual QA, challenge/profile surfaces.
- `ENGINEERING_REVIEWER.md` for architecture, maintainability, tests, and build risks.
- `SECURITY_RLS_REVIEWER.md` for auth, permissions, DB, RLS, storage, service role, signed URLs.
- `QA_REVIEWER.md` for smoke plans, regression checks, and gate evidence.
- `DOCS_KEEPER.md` for docs, prompts, ADR consistency, and operational instructions.

Fix:
- Send reviewer findings back to `BUILDER.md`.
- Fix blockers first: cross-workspace leaks, RLS bypass, locked approval mutation, creator access to private workspace, generic AI SaaS drift.

Ship:
- Use `RELEASE_MANAGER.md` after blockers are resolved and required commands pass.

## Hard YAGI Constraints

- Default locale is `ko`; English is optional.
- No landing page in MVP.
- No anonymous viewer/voter role before Role 4 is approved.
- Private workspace, challenge, creator profile, and showcase surfaces stay structurally distinct.
- AI is assistive only; AI output is a draft/suggestion until accepted by a human.
- Avoid generic AI SaaS patterns: purple/blue gradients, glow, glassmorphism, emoji-heavy UI, template shadcn look.
- RLS bypass, signed URL leaks, and cross-workspace or cross-project data leaks are hard blockers.

## Playbooks

- `docs/playbooks/01_feature_intake.md`
- `docs/playbooks/02_plan_review.md`
- `docs/playbooks/03_build_gate.md`
- `docs/playbooks/04_review_fix.md`
- `docs/playbooks/05_visual_review.md`
- `docs/playbooks/06_security_review.md`
- `docs/playbooks/07_ship.md`

## Command Prompts

Use `prompts/commands/*.md` as copy-paste prompts in Codex for repeatable gates.
