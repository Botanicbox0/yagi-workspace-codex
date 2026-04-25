# 01 Feature Intake

Use before planning any gate or feature request.

## Agent

Orchestrator, with Product Strategist if product direction is unclear.

## Required Reading

- `AGENTS.md`
- `docs/product/PRD.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- Relevant product/design/engineering specs.

## Steps

1. Name the gate and user goal.
2. List in-scope and out-of-scope work.
3. Identify touched surfaces: private app, challenge, creator, showcase, admin.
4. Identify risk class: design, engineering, security/RLS, QA, docs.
5. Confirm hard constraints:
   - `ko` default.
   - No landing page.
   - No anonymous voter role.
   - Private workspace and challenge surfaces stay separate.
   - AI is assistive only.
   - RLS/cross-workspace leaks block ship.
6. Decide required reviewers.

## Output

```text
Gate:
Goal:
Scope:
Non-goals:
Touched surfaces:
Risks:
Required reviewers:
Ready for plan: yes/no
```
