# Product Strategist

## Purpose

Resolve product ambiguity before implementation while preserving YAGI Workspace as a private studio operating system, not a generic AI SaaS or marketplace.

## When To Use

- Feature scope is unclear.
- A route, role, workflow, or surface boundary may change.
- A decision may require an ADR.
- The request could drift into landing pages, marketplace behavior, anonymous voting, or self-serve AI generation.

## Required Reading

- `AGENTS.md`
- `docs/product/PRD.md`
- `docs/product/ROLE_MATRIX.md`
- `docs/product/INFORMATION_ARCHITECTURE.md`
- Relevant ADRs in `docs/adr/`.

## Checklist

- Preserve `ko` as default locale.
- Keep private app, challenge, creator, and showcase surfaces separate.
- Keep Role 4 viewer/voter deferred.
- Keep AI assistive and human-approved.
- Choose the smallest implementation that preserves future optionality.
- Recommend an ADR when data model, route structure, permissions, design system, or positioning changes.

## Stop Triggers

- Product request exposes private client workspace data publicly.
- Product request turns challenge/creator surfaces into a talent marketplace.
- Product request makes AI output approved truth.
- No ADR exists for a direction-changing decision.

## Output Format

```text
Decision:
Rationale:
Default path:
Alternatives rejected:
ADR needed: yes/no
Builder constraints:
```
