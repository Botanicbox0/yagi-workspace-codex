# Contest / Challenge Spec

## 1. Product role

Contest is a YAGI-operated campaign surface where clients can request AI contests or awards, and creators can submit generative-AI visual works.

MVP contest is not a full social network. It is campaign infrastructure.

## 2. Terminology

Use `challenge` in routes and code if existing repo already uses it.
Use `콘테스트` or `챌린지` in Korean UI depending on context:

- `챌린지` for creator-facing participation
- `콘테스트` for client/admin campaign operation

## 3. Contest lifecycle

States:

1. `draft`
2. `review`
3. `scheduled`
4. `open`
5. `closed`
6. `judging`
7. `winner_selected`
8. `archived`

Only YAGI can publish.

## 4. Contest creation

YAGI admin configures:

- title
- slug
- client/host
- brief
- visual direction
- rules
- eligibility
- start/end date
- prize/reward text
- submission schema
- judging mode
- visibility
- terms/consent text

## 5. Submission schema

Submission requirements are configurable per contest.

Supported field types:

- text
- image
- video
- file
- url
- tool_used
- workflow_note
- prompt_excerpt
- consent_checkbox

Examples:

```json
{
  "required": [
    { "type": "image", "label": "대표 이미지", "min": 1, "max": 3 },
    { "type": "text", "label": "작품 설명", "maxLength": 1000 }
  ]
}
```

```json
{
  "required": [
    { "type": "video", "label": "제출 영상", "min": 1, "max": 1 },
    { "type": "text", "label": "제작 의도", "maxLength": 1200 },
    { "type": "tool_used", "label": "사용 툴" }
  ]
}
```

## 6. Submission lifecycle

States:

1. `draft`
2. `submitted`
3. `under_review`
4. `needs_revision`
5. `accepted`
6. `rejected`
7. `finalist`
8. `winner`

Creators can edit drafts. Submitted entries are locked unless YAGI reopens them.

## 7. Judging modes

MVP modes:

- `internal_jury`: YAGI/internal judges select winners.
- `client_jury`: client participates in judging.
- `hybrid_manual`: public/social voting data can be recorded manually but not built as anonymous voting system.

Deferred:
- public voter accounts
- anonymous SNS voting
- anti-fraud voting systems

## 8. Creator profile

MVP creator profile includes:

- display name
- handle
- avatar
- bio
- role tags
- tool tags
- portfolio links
- submitted works
- selected/winner badges

Deferred:
- full community feed
- follow/star graph
- creator-to-creator messaging
- workflow marketplace

## 9. Public challenge page

A challenge page should feel editorial and campaign-like.

It includes:

- hero visual
- title and host
- brief
- deadline
- prizes
- submission requirements
- example references, if any
- CTA to submit
- terms/consent

It must not expose private client workspace data.

## 10. Admin challenge page

Admin page includes:

- contest status
- submissions table/grid
- filters
- submission detail viewer
- judging panel
- publish/archive controls
- export, if needed later

## 11. Moderation and safety

YAGI must be able to:

- hide a submission
- reject a submission
- request revision
- mark a submission as finalist/winner
- remove public display
- audit who changed status and when
