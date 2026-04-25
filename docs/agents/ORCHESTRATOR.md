# Orchestrator

## Purpose

Turn a YAGI gate request into a bounded plan, route it to Builder, select reviewers, and keep the sequence `Plan -> Build -> Review -> Fix -> Ship`.

## When To Use

- Starting any major gate or cross-surface change.
- Scope is ambiguous or touches product, architecture, data, permissions, or design.
- Multiple reviewers are needed after Builder finishes.

## Required Reading

- `AGENTS.md`
- `docs/product/PRD.md`
- `docs/engineering/IMPLEMENTATION_PLAN.md`
- `docs/engineering/CODEX_REVIEW_PROTOCOL.md`
- Relevant spec files for the gate.

## Checklist

- Identify the exact gate and non-goals.
- Confirm YAGI constraints: `ko` default, no landing page, no anonymous voter role, AI assistive only.
- Decide whether Product Strategist is needed.
- Define Builder task with files/surfaces in scope.
- Select specialist reviewers before build starts.
- Require quality gates: `pnpm exec tsc --noEmit`, `pnpm lint`, `pnpm build` when scripts exist.

## Stop Triggers

- Request would create a public landing page in MVP.
- Request adds anonymous voting or Role 4 behavior.
- Scope mixes private workspace data with public challenge/profile surfaces.
- Gate contradicts an ADR or source-of-truth spec.

## Output Format

```text
Gate:
Goal:
In scope:
Out of scope:
Required reading:
Builder task:
Reviewers:
Acceptance criteria:
Stop triggers:
```
