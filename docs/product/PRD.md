# PRD — YAGI Workspace

## 1. Product sentence

**YAGI Workspace is a canvas-first collaboration OS for generative-AI visual production.**

It gives YAGI, clients, and contest creators one shared place to record briefs, references, files, comments, versions, approvals, deadlines, contest submissions, and decisions.

## 2. Product philosophy

YAGI Workspace defines how generative-AI visual work is commissioned, aligned, reviewed, approved, and showcased.

The product is not primarily an AI generation tool. It is the agreement layer around AI-native visual production.

Core sentence:

> 생성형 AI 시각물이 제작되는 모든 합의는 보드 위에 남는다.

## 3. MVP scope

MVP includes:

1. Private workspace collaboration
2. Canvas-first project board
3. File upload and asset versioning through Cloudflare R2
4. Project stage and deadline tracking
5. Client/YAGI comments and approval state
6. Contest/challenge creation and submission
7. Creator profile basics
8. AI assist for brief quality review and suggestions

MVP excludes:

- Marketing landing page
- Anonymous public voter role
- Full community/feed features
- Full marketplace / talent hiring
- Self-serve AI generation as a primary product
- Advanced Kakao integration beyond notification planning
- Billing automation unless already present in the repo

## 4. User roles

### YAGI Team

YAGI employees use `@yagiworkshop.xyz` email accounts and have full operational control.

Core capabilities:
- Manage workspaces, projects, boards, assets, comments, approvals, contests, submissions, and creator profiles.
- Invite clients.
- Review contest submissions.
- Configure contest rules and selection mode.
- Manage AI suggestions before exposing them to clients.

### Client

Clients commission visual work from YAGI.

Core capabilities:
- Create a project request with or without a prepared brief.
- Upload references and files.
- Comment on board nodes and asset versions.
- View deadlines and production status.
- Approve or request revision.
- Request a contest/award campaign operated by YAGI.

### Creator

Creators participate in contests/challenges.

Core capabilities:
- Create profile.
- Browse open contests.
- Submit entries according to contest schema.
- Upload required assets.
- Provide optional workflow/process metadata.
- View submission status.

### Deferred Role 4

Viewer/voter is deferred. Do not build anonymous or public voting flows in MVP.

## 5. Core user journeys

### 5.1 Client project request with prepared brief

1. Client signs in.
2. Client creates project.
3. Client uploads brief, references, files, URLs.
4. YAGI reviews board.
5. YAGI asks clarifying questions on board nodes.
6. Client responds.
7. YAGI moves project through stages.
8. YAGI uploads deliverable versions.
9. Client reviews, comments, and approves.

### 5.2 Client project request without brief

1. Client signs in.
2. Client starts a request with rough idea.
3. Board opens with structured brief prompts.
4. AI assist suggests missing information.
5. YAGI converts rough idea into a production-ready brief.
6. Client confirms direction.
7. Project proceeds to production.

### 5.3 Contest request from client

1. Client requests AI contest/award campaign.
2. YAGI reviews request.
3. YAGI creates contest admin draft.
4. YAGI configures submission schema.
5. YAGI publishes contest.
6. Creators apply/submit.
7. YAGI reviews and selects winners by configured mode.
8. Winners can be showcased.

### 5.4 Creator contest submission

1. Creator signs in.
2. Creator completes profile basics.
3. Creator opens challenge page.
4. Creator reviews rules.
5. Creator submits required text/image/video/mixed assets.
6. Creator receives submitted/under-review/selected/rejected status.

## 6. Project stages

Default stages:

1. 기획
2. 제작
3. 리뷰
4. 수정
5. 완료

Use these as structured data, not just labels.

## 7. Key product objects

- Workspace
- Organization
- Project
- Board
- Board node
- Asset
- Asset version
- Comment thread
- Approval
- Deadline
- Contest
- Contest submission schema
- Contest submission
- Creator profile
- AI suggestion
- Activity event

## 8. Success metrics

MVP should be considered successful when:

- A YAGI member can invite a client and run one project end-to-end without Kakao/email file scattering.
- A client can understand project status and latest version without asking YAGI.
- A board can store references, text, files, embeds, comments, and approval state.
- A contest can be created, published, and receive submissions from creators.
- Asset versions are discoverable and no longer depend on filenames like `final_v3_real_final`.
- The UI feels premium and studio-grade, not generic AI SaaS.

## 9. Product risks

### Risk: Too many products in one

Private workspace, contest, creator profile, and AI assist can become separate products. Mitigate through route/surface separation and phased scope.

### Risk: Canvas becomes messy

Canvas-first does not mean chaos. Use semantic zones, structured metadata, and inspector panels.

### Risk: AI overpromises

AI is assistive only. Human approval is required before suggestions become part of the official record.

### Risk: Public contest overwhelms private studio OS

Contest should start as YAGI-operated campaign infrastructure, not a broad social network.
