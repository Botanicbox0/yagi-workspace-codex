# AI Assist Spec

## 1. Direction

AI assist is supportive, not authoritative.

The product should not imply that AI finalizes briefs, approvals, legal records, contest results, or client-facing decisions without human review.

## 2. MVP AI features

### Brief quality review

AI reviews a project board or brief and suggests missing elements:

- target audience unclear
- deliverable format missing
- deadline unclear
- tone and reference mismatch
- required aspect ratio missing
- usage channel missing
- revision/approval criteria missing
- brand constraints missing

### Reference organizer

AI can summarize or group uploaded references:

- mood
- lighting
- composition
- pacing
- texture
- camera language
- style conflicts

### Contest brief helper

AI can review a contest brief and suggest:

- clearer submission requirements
- judging criteria
- creator-facing instructions
- missing rights/consent reminders
- deadline clarity

### Image generation helper

Image generation can be used for:
- challenge hero draft
- sample moodboard image
- onboarding/empty state image
- internal reference exploration

Generated images are assets and must be labeled as AI-generated drafts.

## 3. Human approval

AI outputs follow this lifecycle:

1. `generated`
2. `reviewed`
3. `accepted`
4. `dismissed`
5. `converted_to_board_node`

Only accepted suggestions can become official board content.

## 4. AI logging

Log:

- user
- project/contest context
- model/provider
- prompt category
- token/image usage when available
- created time
- accepted/dismissed status

Do not store unnecessary sensitive prompt data if it includes private client data unless needed for audit/debugging.

## 5. Provider abstraction

Use provider adapters.

Do not hard-code a single AI image model throughout the app.

Suggested interfaces:

```ts
type BriefReviewInput = {
  locale: "ko" | "en";
  projectId?: string;
  contestId?: string;
  boardSummary: string;
  assetsSummary?: string;
};

type AiSuggestion = {
  kind: "missing_info" | "risk" | "rewrite" | "reference_note" | "contest_rule";
  title: string;
  body: string;
  confidence?: number;
};

interface AiAssistProvider {
  reviewBrief(input: BriefReviewInput): Promise<AiSuggestion[]>;
}
```

```ts
interface ImageGenerationProvider {
  generateImage(input: {
    prompt: string;
    aspectRatio?: string;
    referenceAssetIds?: string[];
  }): Promise<{ assetVersionId: string }>;
}
```

## 6. Design rules

AI assist UI should be quiet:

- use inspector panel
- label as `검토할 제안`
- no glow
- no magic wand hero treatment
- no overpromising copy

Good Korean labels:

- `검토할 제안`
- `기획 보완점`
- `레퍼런스 정리`
- `보드에 추가`
- `닫기`

Avoid:

- `AI가 완성했어요`
- `마법처럼 생성`
- `지금 바로 혁신`
