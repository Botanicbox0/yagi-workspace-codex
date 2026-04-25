# Technical Spec

## 1. Recommended stack

Frontend:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui retokened to YAGI design system
- next-intl for `ko` / `en`

Backend:
- Supabase Auth
- Postgres
- Supabase Row Level Security
- Server Actions or route handlers depending on existing repo convention

Storage:
- Cloudflare R2
- Signed upload/download URLs
- DB metadata for all assets and versions

Canvas:
- tldraw or scoped custom canvas
- TipTap/ProseMirror for rich text inside nodes
- Avoid building a full real-time Figma clone in MVP

AI:
- OpenAI Responses API or existing AI service conventions in repo
- Provider adapters for brief review and image generation
- AI usage logging

Notifications:
- in-app notifications
- email provider such as Resend if already used
- Kakao deferred

## 2. Architecture principles

- Schema-first.
- RLS-first.
- Korean-first.
- Visual-first.
- Human-in-the-loop for AI.
- Metadata in DB, binary in R2.
- Keep public contest pages separate from private workspace routes.
- Keep creator profiles separate from client workspaces.

## 3. Project app layers

Suggested layers:

```text
src/app/[locale]/app/*
src/app/[locale]/challenges/*
src/app/[locale]/u/[handle]/*
src/components/app/*
src/components/board/*
src/components/challenge/*
src/components/creator/*
src/lib/app/*
src/lib/board/*
src/lib/assets/*
src/lib/challenges/*
src/lib/ai/*
src/lib/notifications/*
supabase/migrations/*
```

Adapt to existing repo conventions.

## 4. Environment

See `.env.example`.

Required services for full MVP:

- Supabase project
- Cloudflare R2 bucket
- email provider
- OpenAI API key for AI assist/image draft features

## 5. File upload architecture

Flow:

1. User requests upload.
2. Server verifies auth/role/project access.
3. Server creates asset metadata row.
4. Server returns signed R2 upload URL.
5. Client uploads binary directly to R2.
6. Client confirms upload.
7. Server creates asset version row and usage link.
8. Board node references asset version.

Do not pass large files through Next.js server when direct R2 upload is available.

## 6. Board state

Separate spatial state from queryable metadata.

Board JSON may include:
- node positions
- node dimensions
- layout metadata
- zone placement

Relational tables should handle:
- assets
- versions
- comments
- approvals
- activity events
- permissions
- snapshots

## 7. Contest submission architecture

Use configurable schema stored in DB.

Validate submissions server-side against schema.

Upload files through the same asset/version infrastructure, but scope them to contest submission context.

## 8. Internationalization

- `ko` is default.
- All Korean strings must be natural Korean, not literal English translations.
- Keep route slugs English unless existing app uses Korean slugs.
- `en` can ship with fallback but should not block MVP unless required.

## 9. Performance constraints

- Canvas should lazy-load heavy nodes.
- Use thumbnails for image/video previews.
- Keep original files in R2.
- Use signed URLs with expiration.
- Avoid loading all asset versions into canvas initial payload if unnecessary.
- Use inspector lazy loading for comments/version history.

## 10. Security constraints

- RLS protects all workspace/project/board/submission tables.
- Public pages query only approved public data.
- Service role is server-only and narrowly scoped.
- Signed URLs require permission checks.
- No private R2 object URL should be exposed permanently.
