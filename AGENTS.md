# AGENTS.md — YAGI Workspace

These instructions apply to the whole repository unless a more specific `AGENTS.md` exists in a subdirectory.

## Mission

Build **YAGI Workspace** as a premium, canvas-first collaboration OS for generative-AI visual production.

The product is not a generic AI SaaS, not a talent marketplace, and not a self-serve image generator. It is a private studio operating system where YAGI, clients, and creators record briefs, references, files, comments, versions, approvals, deadlines, contest submissions, and decisions.

## Required reading before implementation

Read these files before making product or architecture decisions:

- `docs/product/PRD.md`
- `docs/product/ROLE_MATRIX.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- `docs/product/CANVAS_BOARD_SPEC.md`
- `docs/product/CONTEST_SPEC.md`
- `docs/design/DESIGN_SYSTEM.md`
- `docs/engineering/TECH_SPEC.md`
- `docs/engineering/DATA_MODEL.md`
- `docs/engineering/RLS_POLICY.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`

For any design-facing work, also read:

- `docs/design/VISUAL_QA_CHECKLIST.md`
- `docs/design/CONTENT_STYLE_GUIDE.md`

For any security, database, storage, auth, or permission work, also read:

- `docs/engineering/RLS_POLICY.md`
- `docs/engineering/TESTING_STRATEGY.md`

## Non-negotiable product constraints

- Default locale is `ko`. `en` is optional.
- There is no landing page in MVP. Do not create marketing landing pages unless explicitly asked.
- Role 4 viewer/voter is deferred. Do not build anonymous or general voter flows in MVP.
- MVP includes both private workspace collaboration and contest/challenge operations.
- The core collaboration surface is canvas-first, not document-first.
- AI is assistant-level only. AI outputs must not be treated as approved truth.
- The app must feel premium, editorial, precise, and studio-grade.
- Do not use generic AI SaaS visual patterns: purple/blue gradients, glow, glass cards, emoji-heavy empty states, random 3D illustrations, or shadcn defaults without YAGI retokening.
- Client/YAGI collaboration, contest operations, and creator profile surfaces must remain structurally distinct.

## Implementation rules

- Inspect existing repo conventions before adding files.
- Prefer boring, proven stack choices over new abstractions.
- Make small, reviewable changes.
- Avoid growing high-touch files into large modules. Create focused modules when needed.
- Every DB change requires:
  - migration
  - RLS policy
  - typed access layer or server action
  - seed/smoke test or documented manual test
- Every storage change must use Cloudflare R2 through signed upload/download flows.
- DB stores metadata; R2 stores binary files.
- Every file-like object must be modeled as an asset with version history.
- Every cross-workspace/project access path must be denied by default.
- Never bypass RLS in user-facing paths.
- Service-role access is allowed only in narrow server-only administrative functions with explicit comments.
- All AI calls must log usage and store output as draft/suggestion until accepted by a human.
- User-visible Korean copy must be natural and concise. Do not translate English SaaS copy literally.

## Quality gates

Run these at every gate unless the repo uses different project scripts:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Add or run relevant tests for:
- RLS isolation
- role gating
- asset upload/versioning
- canvas autosave/snapshot flows
- contest submission schema validation
- Korean IME typing in text nodes
- visual regression or manual screenshot checks for app shell/canvas/challenge surfaces

## Stop triggers

Stop and report clearly if any of these occur:

- Cross-project or cross-workspace data leak.
- Client can mutate locked/approved board state.
- Creator can access private client workspace.
- RLS policy bypass in a user-facing path.
- Build/typecheck/lint fail twice after attempted fixes.
- Korean IME input is broken in editor/canvas text nodes.
- New implementation contradicts an ADR or source-of-truth spec.
- Any new public voting/anonymous viewer feature is introduced before Role 4 is approved.

## Git workflow

- Work gate-by-gate.
- Keep the worktree clean before each gate.
- Commit after each gate passes typecheck, lint, build, and smoke tests.
- Use meaningful commit prefixes, for example:
  - `foundation:`
  - `auth:`
  - `board:`
  - `assets:`
  - `contest:`
  - `ai-assist:`
  - `design:`
  - `rls:`

## Decision workflow

When product direction is ambiguous:
1. Look for an existing ADR in `docs/adr/`.
2. If no ADR exists, choose the smallest implementation that preserves future optionality.
3. Add a new ADR when the decision affects data model, route structure, permissions, design system, or product positioning.
4. Do not ask broad “Should I proceed?” questions. Make a scoped recommendation with tradeoffs and a default path.
