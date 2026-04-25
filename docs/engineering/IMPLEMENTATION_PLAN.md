# Implementation Plan

## Gate 0 — Repo audit and alignment

Goal: understand existing repo before writing product code.

Tasks:
- inspect package manager and scripts
- inspect routing structure
- inspect auth/session pattern
- inspect Supabase client/server utilities
- inspect existing design tokens/components
- inspect existing upload/storage conventions
- inspect i18n convention
- document conflicts with this spec

Exit criteria:
- summary written in Codex response
- no code yet unless adding this documentation pack

Commands:
```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

## Gate 1 — Foundation

Goal: app shell and role-aware routing foundation.

Tasks:
- ensure `ko` default locale and `en` optional behavior
- implement or align workspace/profile/admin scope model
- implement route guards for private app, admin, public challenge, creator profile
- update sidebar grouping if needed
- ensure no landing page is created

Exit criteria:
- route access works for YAGI, client, creator
- typecheck/lint/build pass

## Gate 2 — Data model and RLS

Goal: ship core database schema.

Tasks:
- create migrations for profiles/workspaces/memberships if not already present
- create projects/boards/nodes/assets/comments/approvals/activity tables
- create contests/submissions/creator profile tables
- implement RLS helper functions and policies
- add seed or smoke script

Exit criteria:
- RLS tests or manual SQL checks pass
- typecheck/lint/build pass

## Gate 3 — Project workspace MVP

Goal: client/YAGI can create and view projects.

Tasks:
- project list
- project create flow
- project detail shell
- stage/deadline view
- basic comments/activity
- client invite if not present

Exit criteria:
- YAGI creates project
- client can view assigned project
- unauthorized users cannot view it

## Gate 4 — Canvas board MVP

Goal: canvas-first board with essential nodes.

Tasks:
- board route
- canvas shell
- semantic zones
- text node with Korean IME support
- image/file/embed node placeholders
- inspector panel
- autosave
- comments on nodes

Exit criteria:
- user can create/reorder/move nodes
- text editing works in Korean
- comments attach to node
- typecheck/lint/build pass

## Gate 5 — Asset upload and versioning

Goal: R2-backed asset version system.

Tasks:
- signed upload endpoint/action
- asset + asset_versions persistence
- image/file nodes linked to asset versions
- version history inspector
- approval request/approval state for asset version
- thumbnails if feasible

Exit criteria:
- multi image upload works
- version history visible
- unauthorized signed URL denied

## Gate 6 — Contest MVP

Goal: YAGI can create a contest and creators can submit.

Tasks:
- admin contest create/edit
- submission schema builder or JSON-based MVP
- public challenge page
- creator profile basics
- creator submission form
- submission asset upload
- submission status admin review

Exit criteria:
- contest can be published
- creator can submit required fields
- YAGI can review submissions
- no anonymous public voter role

## Gate 7 — AI Assist MVP

Goal: quiet AI suggestions.

Tasks:
- AI provider adapter
- brief review action
- suggestions stored in `ai_suggestions`
- inspector UI for suggestions
- accept/dismiss flow
- usage logging

Exit criteria:
- AI suggestion can be generated
- accepted suggestion can become board node
- dismissed suggestion remains archived
- AI output never auto-approves anything

## Gate 8 — Visual polish and review

Goal: product feels premium and coherent.

Tasks:
- run visual QA checklist
- remove generic shadcn/default styling
- check Korean copy
- check empty states
- check canvas hierarchy
- check challenge editorial surface
- run adversarial Codex review prompt

Exit criteria:
- `docs/design/VISUAL_QA_CHECKLIST.md` passes
- no forbidden visual patterns
- all commands pass

## Gate 9 — Release candidate

Goal: one end-to-end manual run.

Manual smoke:
- YAGI creates client workspace/project
- Client opens project board
- Client uploads reference
- YAGI uploads deliverable version
- Client comments and approves
- YAGI creates contest
- Creator submits contest entry
- YAGI reviews submission
- AI suggestion generated and accepted into board

Final commands:
```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```
