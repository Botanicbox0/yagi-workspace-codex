# Information Architecture

## 1. Surface separation

YAGI Workspace has three main surfaces:

1. Private App — `/[locale]/app/*`
2. Challenge/Public Surface — `/[locale]/challenges/*`
3. Creator/Profile/Showcase Surface — `/[locale]/u/*`, `/[locale]/showcase/*`

This separation is important. Do not make the private workspace look like a marketplace, and do not make contest surfaces feel like internal admin tooling.

## 2. Private app routes

```text
/[locale]/app
/[locale]/app/projects
/[locale]/app/projects/new
/[locale]/app/projects/[projectId]
/[locale]/app/projects/[projectId]/board
/[locale]/app/projects/[projectId]/files
/[locale]/app/projects/[projectId]/timeline
/[locale]/app/projects/[projectId]/settings

/[locale]/app/admin
/[locale]/app/admin/workspaces
/[locale]/app/admin/clients
/[locale]/app/admin/challenges
/[locale]/app/admin/challenges/new
/[locale]/app/admin/challenges/[challengeId]
/[locale]/app/admin/challenges/[challengeId]/submissions
/[locale]/app/admin/challenges/[challengeId]/judging

/[locale]/app/settings
/[locale]/app/notifications
```

## 3. Public/semi-public routes

```text
/[locale]/challenges
/[locale]/challenges/[slug]
/[locale]/challenges/[slug]/submit
/[locale]/u/[handle]
/[locale]/showcase/[slug]
```

## 4. Sidebar grouping

Private app sidebar should be grouped, not flat.

```text
Context
- Scope selector: workspace / profile / admin

작업
- 프로젝트
- 프리프로덕션
- 쇼케이스
- 챌린지 관리

소통
- 알림
- 팀 채널
- 미팅

결제
- 인보이스, if present in existing repo

시스템
- 설정
- 관리자
```

Auto-hide group labels if a group has fewer than two visible items.

## 5. Page shell

Private app shell:

```text
Left sidebar = navigation and scope
Center = main canvas/list/detail content
Right inspector = comments, versions, approval, AI suggestions
```

Canvas board page should use this structure:

```text
┌──────────────┬──────────────────────────────┬─────────────────┐
│ Sidebar      │ Canvas Board                 │ Inspector       │
│              │ Brief / References / Assets  │ Comments        │
│              │ Timeline / Approvals         │ Version history │
│              │                              │ AI suggestions  │
└──────────────┴──────────────────────────────┴─────────────────┘
```

## 6. Navigation principles

- Public challenge pages should not show private app sidebar.
- Creator profile should not show private app sidebar.
- Admin challenge management lives under `/app/admin`.
- Public challenge pages can link to creator profiles and showcases.
- Client project board should not expose creator community features.
