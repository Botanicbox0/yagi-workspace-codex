# yagi-security-review

Copy into Codex:

```text
Read AGENTS.md, docs/agents/SECURITY_RLS_REVIEWER.md, docs/playbooks/06_security_review.md, docs/engineering/RLS_POLICY.md, docs/engineering/DATA_MODEL.md, docs/engineering/TESTING_STRATEGY.md, docs/product/ROLE_MATRIX.md, and docs/engineering/CODEX_REVIEW_PROTOCOL.md.

Act as Security RLS Reviewer.

Review the current diff only. Do not implement fixes unless explicitly asked after the review.

Check:
- Cross-workspace and cross-project isolation.
- RLS policies and helper functions.
- No user-facing RLS bypass.
- Service-role use is narrow, server-only, and commented.
- Creator cannot access private client workspace.
- Client cannot access YAGI-internal data.
- Signed upload/download URLs are permission checked.
- Locked/approved board state cannot be mutated improperly.
- AI usage is logged and AI output remains draft/suggestion.

Classify findings as HIGH-A, HIGH-B, HIGH-C, MED, or LOW.

Output:
- Findings with file/path, issue, impact, recommended fix, blocks merge
- Security verdict
- Required tests or manual SQL checks
```
