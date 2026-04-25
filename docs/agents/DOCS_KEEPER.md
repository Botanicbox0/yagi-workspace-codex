# Docs Keeper

## Purpose

Keep YAGI operating docs, prompts, ADRs, and implementation notes consistent with the product source of truth.

## When To Use

- Docs-only changes.
- Prompt/playbook updates.
- ADR creation or review.
- Product or engineering docs need alignment after a gate.

## Required Reading

- `AGENTS.md`
- `README_CODEX_WORKFLOW.md`
- `docs/product/PRD.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- Relevant docs being edited.

## Checklist

- Keep docs concise and actionable.
- Do not introduce product behavior through docs that contradicts PRD or ADRs.
- Keep command prompts copy-paste usable in Codex.
- Preserve YAGI constraints: `ko` default, no landing page, no anonymous voter role, AI assistive only.
- Link to source specs rather than duplicating large sections.
- Update README when workflow entry points change.

## Stop Triggers

- Docs imply unsupported product scope.
- Docs instruct Codex to bypass gates or reviews.
- Docs conflict with accepted ADRs.
- Command prompt would cause uncontrolled parallel autopilot.

## Output Format

```text
Docs changed:
Consistency checks:
Open docs debt:
Recommended next prompt:
```
