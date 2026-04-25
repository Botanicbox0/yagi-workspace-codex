# Visual QA Checklist

Run this before merging any UI gate.

## 1. Overall feel

- [ ] Does the screen feel like a premium studio operating system?
- [ ] Does it avoid generic AI SaaS styling?
- [ ] Does visual content feel more important than UI chrome?
- [ ] Is the interface calm enough for clients to trust?

## 2. Color

- [ ] No random purple/blue gradient.
- [ ] No generic glow.
- [ ] Accent color used sparingly.
- [ ] Semantic tokens used instead of raw Tailwind colors where possible.
- [ ] Active/focus/selected states are consistent.

## 3. Typography

- [ ] Korean labels are natural.
- [ ] Buttons are not too long.
- [ ] Metadata is readable but quiet.
- [ ] Descriptions are no more than 1-2 lines unless necessary.
- [ ] No literal English-to-Korean SaaS copy.

## 4. Layout

- [ ] Private app uses sidebar + main + optional inspector.
- [ ] Public challenge pages do not show private app sidebar.
- [ ] Canvas has enough breathing room.
- [ ] Inspector does not crowd the canvas.
- [ ] Empty states provide clear next action.

## 5. Canvas

- [ ] Image/video/file nodes look like production assets, not generic cards.
- [ ] Node selected state is precise.
- [ ] Comments, version, approval badges are visible but quiet.
- [ ] Zones guide the board without making it rigid.
- [ ] Korean text editing works.

## 6. Contest

- [ ] Challenge page feels editorial/campaign-like.
- [ ] Deadline and requirements are immediately clear.
- [ ] Submission CTA is clear.
- [ ] Creator cards feel portfolio-like, not marketplace-like.
- [ ] No public voting UI unless explicitly scoped.

## 7. AI assist

- [ ] AI suggestions are labeled as suggestions.
- [ ] No AI output appears approved by default.
- [ ] No magic/glow styling.
- [ ] Accept/dismiss actions are clear.

## 8. Accessibility

- [ ] Keyboard focus visible on every interactive element.
- [ ] Forms have labels.
- [ ] Dialogs close with Escape.
- [ ] Dropdowns are keyboard navigable.
- [ ] Contrast is sufficient.

## 9. Final anti-generic check

Remove or redesign if the screen could be mistaken for:
- a generic AI dashboard
- a template shadcn app
- a marketplace
- a Notion clone
- a Webflow landing page
