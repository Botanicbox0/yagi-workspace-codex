# Canvas Board Spec

## 1. Direction

The board is canvas-first. It should feel like a premium studio working surface, not a generic document editor.

The board combines:

- Figma/FigJam-style spatial thinking
- Notion-style structured blocks
- Are.na-style reference collection
- Frame.io-style comment and review discipline

## 2. Board structure

Each project has one primary board in MVP.

The canvas should support semantic zones:

1. Brief Zone
2. Reference Zone
3. Production Zone
4. Feedback Zone
5. Approval Zone
6. Timeline Zone

Zones are not rigid pages. They are spatial areas that help users understand where things belong.

## 3. Node types

### Text node

- Supports Korean-first editing.
- Supports markdown shortcuts.
- Used for brief, notes, instructions, questions, and decisions.
- Must pass Korean IME smoke test.

### Image node

- Supports drag/drop and multi-upload.
- Stores binary in R2.
- Shows caption, uploader, version indicator, comment count, approval state.

### Video node

- Supports MP4 upload in MVP if storage/upload limits allow.
- Otherwise represent as file node with preview deferred.

### File node

- Supports PDF, AI, FIG, MP4, ZIP, and common production files.
- Shows file type, size, version, uploader, updated time.
- Does not depend on filename for version history.

### Embed node

MVP support:
- YouTube
- Vimeo
- generic Open Graph preview

Deferred:
- Figma rich preview
- Behance rich preview
- Pinterest rich preview
- Loom rich preview

### AI suggestion node

- Shows assistive suggestions.
- Must be visually quiet.
- Must not look like approved content.
- Requires human acceptance to become official board content.

### Approval node

- Used to capture explicit agreement.
- Stores who approved, what object/version was approved, and when.

## 4. Asset versioning

Every uploaded file is an `asset`.

Each upload or replacement creates an `asset_version`.

Never rely on filenames such as:

```text
final_v2_real_final.png
```

Use structured version history:

```text
Asset
- version 1
- version 2
- version 3
- approved version
```

## 5. Comments

Comments can attach to:

- Board
- Node
- Asset version
- Approval
- Contest submission, if reused

Comments must support:

- author
- body
- created time
- resolved state
- mention support, if available
- visibility: client-visible or YAGI-internal

## 6. Snapshots

A board snapshot records a meaningful board state.

Use cases:
- Client confirmed direction.
- YAGI started production.
- New deliverable version shared.
- Final approval.

Snapshots should be read-only and restorable by YAGI.

## 7. Autosave and concurrency

- Board edits autosave.
- Use optimistic concurrency.
- If a stale user tries to save, show a conflict toast and reload/merge path.
- Do not silently overwrite another user's changes.

## 8. Locking

A board or node can be locked after approval.

Locked state means:
- client cannot mutate approved content
- YAGI can unlock with audit log
- comments may remain open depending on approval state

## 9. Inspector panel

The right inspector should show context for the selected object:

- Node details
- Comments
- Asset versions
- Approval history
- AI suggestions
- Activity log

## 10. Canvas implementation guidance

Preferred approach:
- canvas shell: tldraw or carefully scoped custom canvas
- rich text inside nodes: TipTap/ProseMirror
- board state: normalized JSON plus relational metadata in DB
- assets: R2 + DB metadata

Avoid:
- building a full Figma clone
- infinite collaborative multiplayer in MVP
- storing binary data in Postgres
- creating unstructured JSON that cannot be queried for approvals/assets/comments
