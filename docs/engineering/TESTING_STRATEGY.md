# Testing Strategy

## 1. Command gate

Run at every gate:

```bash
pnpm exec tsc --noEmit
pnpm lint
pnpm build
```

Adapt commands to existing repo scripts if different.

## 2. RLS tests

Required scenarios:

- client A cannot read client B workspace
- client A cannot read project from client B
- creator cannot read private client project
- public challenge page cannot read private contest draft
- creator can edit own draft submission
- creator cannot edit another creator submission
- client cannot read yagi_internal board node
- client cannot mutate locked board node
- signed URL endpoint refuses unauthorized access

## 3. Editor/canvas tests

Manual smoke:

- Korean IME typing in text node for 5 minutes
- markdown shortcut does not break composition
- drag image into canvas
- multi-upload image
- attach comment to node
- move node and refresh
- autosave conflict path

## 4. Asset tests

- upload image
- upload PDF or design file
- create new version
- view previous version
- request approval
- approve asset version
- verify R2 object not public by default
- verify signed URL expires

## 5. Contest tests

- YAGI creates contest draft
- YAGI publishes contest
- creator creates profile
- creator submits required image+text
- invalid submission fails schema validation
- YAGI marks submission as finalist/winner
- public page shows only allowed fields

## 6. Visual QA

Run through `docs/design/VISUAL_QA_CHECKLIST.md`.

## 7. Accessibility

- keyboard tab order
- focus-visible ring
- dialog close with Escape
- dropdown keyboard navigation
- form labels
- image alt/caption handling
- contrast with design tokens

## 8. Release smoke

One end-to-end pass:

1. YAGI admin signs in.
2. Creates client workspace.
3. Creates project.
4. Uploads brief references.
5. Client comments.
6. YAGI uploads deliverable version.
7. Client approves.
8. YAGI creates contest.
9. Creator submits entry.
10. YAGI reviews entry.
