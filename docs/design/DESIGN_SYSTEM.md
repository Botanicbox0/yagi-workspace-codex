# Design System — YAGI Workspace

## 1. Design direction

YAGI Workspace should feel like a private creative operations room, not a generic AI SaaS dashboard.

The interface must be quiet, editorial, precise, and studio-grade. It should use restrained typography, warm neutral surfaces, semantic tokens, minimal accent color, and strong visual hierarchy.

The canvas should make visual assets feel important. UI chrome should not overpower images, videos, references, and deliverables.

## 2. Reference mix

Core private app:
- A24 restraint
- Linear precision
- Frame.io review discipline

Canvas board:
- Figma/FigJam spatial thinking
- Are.na reference sensibility
- Notion structured blocks

Contest / creator / showcase:
- Contact.xyz editorial confidence
- portfolio archive density
- campaign page energy

Important: Contact.xyz is a reference for creative-industry confidence, profile/showcase cards, and concise CTA rhythm. Do not make YAGI Workspace feel like an open talent marketplace.

## 3. Visual principles

1. Editorial
2. Calm
3. Precise
4. Studio-grade
5. Korean-first
6. Visual-first

## 4. Color direction

Use semantic tokens. Do not use raw Tailwind gray/blue/purple scales directly in product components unless the repo's design system explicitly maps them.

Base:
- warm off-white
- soft paper
- ink black
- charcoal
- muted gray

Accent:
- a single restrained YAGI/Webflow-like blue accent
- use for active state, primary CTA, selected node, focus highlight

Avoid:
- AI purple
- neon cyan
- pink/blue gradients
- random pastel palettes
- glassmorphism
- decorative glow

## 5. Typography

Korean UI must be first-class.

Recommended:
- UI/body: Pretendard or existing Korean-first sans
- Display/scope labels: WF Visual Sans or existing display token
- Mono: metadata only, very limited

Rules:
- Avoid long Korean button labels.
- Use concise noun/verb phrases.
- Prefer 1-2 line descriptions.
- Make metadata quiet but readable.

Good labels:
- 기획 보드
- 새 버전 저장
- 승인 요청
- 제출물 검토
- 최종본 확정
- 챌린지 열기

Avoid:
- AI가 마법처럼 콘텐츠를 생성했어요
- 창의적인 여정을 시작하세요
- 지금 바로 혁신적인 경험을 만나보세요

## 6. Layout

Private app:

```text
Left sidebar = operations/navigation
Center = canvas or primary content
Right inspector = context/comments/versions/approval/AI suggestions
```

Public challenge pages:
- no private app sidebar
- editorial header/footer
- campaign-like hero
- visual cards
- concise CTA

Creator profiles:
- visual archive
- profile header
- selected works
- tool/workflow tags

## 7. Component rules

### Cards

- Cards should not all look the same.
- Avoid overusing `rounded-2xl shadow` everywhere.
- Use borders and shadows subtly.
- Let images carry weight.

### Buttons

- Primary CTA should be rare.
- Secondary actions should be quiet.
- Destructive actions require confirmation.

### Empty states

Empty states should be useful and YAGI-toned.

Good:
- 아직 업로드된 레퍼런스가 없습니다.
- 보드에 이미지나 파일을 끌어다 놓아 시작하세요.

Avoid:
- 여기가 비어 있어요 ✨
- AI로 멋진 작업을 시작해보세요!

### AI suggestions

- Should live in inspector or quiet node.
- Label as suggestions, not truth.
- No glow or magic styling.

## 8. Canvas visual rules

- Visual assets should be primary.
- Node chrome should be minimal.
- Selected state should be precise.
- Comments/version badges should be small and consistent.
- Approval state should be clear but not loud.
- Zones should guide without boxing everything.

## 9. Contest surface rules

Contest pages can be more editorial and visual than private app pages.

Use:
- large hero visual
- strong but restrained title
- clear deadline
- submission requirement cards
- creator entry grid
- concise CTA

Avoid:
- marketplace browsing as primary IA
- generic startup landing sections
- excessive gradients
- public voting features before Role 4

## 10. Forbidden patterns

Do not introduce:

- raw `text-gray-*`, `bg-gray-*`, `border-gray-*` if semantic tokens exist
- raw blue/purple gradients
- generic AI glow
- emoji-heavy UI
- placeholder 3D illustrations
- shadcn default theme without retokening
- glass cards as a primary style
- English-first layout/copy
- marketing landing page components in app surfaces
- marketplace language such as "hire talent" for YAGI private workspace

## 11. Motion

Motion should be subtle:

- hover fade
- panel slide
- node selection transition
- upload progress
- toast entrance

Avoid:
- bouncing
- excessive spring
- flashy AI reveal
- animated gradients

## 12. Design QA

Run `docs/design/VISUAL_QA_CHECKLIST.md` before merge.
