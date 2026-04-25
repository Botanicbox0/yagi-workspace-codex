# ADR 0002 — Canvas-first Board

Status: Accepted

## Context

The brief surface could be a Notion-style document, a form, or a freeform canvas.

YAGI work is visual and reference-heavy. A document-first interface would underrepresent images, videos, files, and spatial comparison.

## Decision

Use a canvas-first board with structured nodes and semantic zones.

Text editing lives inside nodes. Structured metadata remains in relational tables.

## Consequences

- Board feels visual-first.
- Text brief remains possible.
- Asset/version/comment/approval data stays queryable.
- We avoid building a full Figma clone in MVP.
