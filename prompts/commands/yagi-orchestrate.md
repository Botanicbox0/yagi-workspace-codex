# yagi-orchestrate

Copy into Codex:

```text
Read AGENTS.md, docs/agents/README.md, docs/agents/ORCHESTRATOR.md, docs/product/PRD.md, docs/engineering/IMPLEMENTATION_PLAN.md, and docs/engineering/CODEX_REVIEW_PROTOCOL.md.

Act as the YAGI Orchestrator.

Do not implement code yet.
Create a gate plan using the sequence: Plan -> Build -> Review -> Fix -> Ship.

Gate/request:
[PASTE REQUEST HERE]

Hard constraints:
- Default locale is ko.
- No landing page in MVP.
- No anonymous viewer/voter role.
- Private workspace, challenge, creator, and showcase surfaces stay separate.
- AI is assistive only and never approved truth by default.
- Avoid generic AI SaaS design patterns.
- RLS bypass, signed URL leaks, and cross-workspace/project leaks are hard blockers.

Output:
- Gate
- Goal
- In scope
- Out of scope
- Required reading
- Builder task
- Required reviewers
- Acceptance criteria
- Stop triggers
```
