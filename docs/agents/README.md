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

## MVP Security Mode

Use MVP Security Mode until the product reaches a real production hardening phase.

Security should prevent real MVP-critical damage, not create an enterprise-heavy process. Block only issues that can cause cross-user data exposure, private file exposure, or approval/version corruption in an actual reachable MVP path.

Hard blockers only:
- Cross-workspace or cross-project data leak.
- Service-role key exposed to client code.
- Private file or signed URL leak.
- Creator access to private client workspace.
- Client access to YAGI-internal notes.
- Approved or locked version mutation without explicit YAGI action.

Downgrade to MED or LOW when:
- The risk is theoretical only.
- No user-facing path exists yet.
- The issue affects only seed/demo data.
- The mitigation can be recorded as follow-up.
- An app-layer guard already prevents the path in the MVP.

## Which Agent To Use

Plan:
- Use `ORCHESTRATOR.md` to define scope, gate, risks, required reading, and acceptance criteria.
- Use `PRODUCT_STRATEGIST.md` only when product direction, route boundaries, MVP scope, or ADR decisions are ambiguous.

Build:
- Use `BUILDER.md` for implementation, docs edits, migrations, tests, and verification.

Review:
- Use reviewers based on the changed surface, not all reviewers by default.
- `DESIGN_DIRECTOR.md` only for UI, Korean copy, visual QA, challenge/profile/showcase surfaces, or design token changes.
- `ENGINEERING_REVIEWER.md` for architecture, maintainability, shared abstractions, tests, and build risks.
- `SECURITY_RLS_REVIEWER.md` only for auth, permissions, DB, RLS, storage, service role, signed URLs, or private/public data-boundary changes.
- `QA_REVIEWER.md` for final smoke checks or when a gate changes behavior that needs manual verification.
- `DOCS_KEEPER.md` only for docs, prompts, ADR consistency, and operational instructions.

Fix:
- Send reviewer findings back to `BUILDER.md`.
- Fix hard blockers first: real cross-user leaks, service-role exposure, private file leaks, creator access to private workspace, client access to YAGI-internal notes, and approved/locked version mutation.
- Do not expand a small fix into a broad refactor unless the blocker cannot be fixed narrowly.

Ship:
- Use `RELEASE_MANAGER.md` after blockers are resolved and required commands pass.

## Token-Efficient Codex Rules

- Read only docs relevant to the current gate.
- Prefer current-diff review over full-repo review after Gate 0.
- Keep prompts under 120 lines when possible.
- Avoid rerunning full repo exploration unless architecture changed.
- Avoid broad refactors.
- Keep each Codex task under 8 files when possible.
- Prefer micro-slices: plan one small change, build it, verify it, commit it.
- Do not ask Codex to implement an entire gate when the gate can be split into smaller safe slices.

## Hard YAGI Constraints

- Default locale is `ko`; English is optional.
- No landing page in MVP.
- No anonymous viewer/voter role before Role 4 is approved.
- Private workspace, challenge, creator profile, and showcase surfaces stay structurally distinct.
- AI is assistive only; AI output is a draft/suggestion until accepted by a human.
- Avoid generic AI SaaS patterns: purple/blue gradients, glow, glassmorphism, emoji-heavy UI, template shadcn look.
- Real cross-user leaks, private file leaks, service-role exposure, and approval/version corruption are hard blockers.

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
