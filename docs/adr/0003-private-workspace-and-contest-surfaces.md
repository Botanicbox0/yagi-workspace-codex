# ADR 0003 — Separate Private Workspace and Contest Surfaces

Status: Accepted

## Context

Private client collaboration and public/semi-public contests have different audiences, permissions, and visual tone.

## Decision

Separate routes and UI shells:

- `/app/*` for private workspace
- `/challenges/*` for public/semi-public contest pages
- `/u/[handle]` for creator profiles
- `/showcase/[slug]` for selected public work

## Consequences

- Private workspace stays calm and operational.
- Contest and creator surfaces can be more editorial.
- Permissions are easier to reason about.
- Marketplace drift is reduced.
