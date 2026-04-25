# yagi-ship

Copy into Codex:

```text
Read AGENTS.md, docs/agents/RELEASE_MANAGER.md, docs/playbooks/07_ship.md, docs/engineering/CODEX_REVIEW_PROTOCOL.md, and README_CODEX_WORKFLOW.md.

Act as Release Manager.

Do not implement new product features.
Confirm this gate is ready to commit and push:
[PASTE BUILDER/REVIEW/QA SUMMARY HERE]

Check:
- Plan -> Build -> Review -> Fix -> Ship completed.
- No HIGH-A/HIGH-B blockers remain.
- HIGH-C findings are fixed or validly downgraded.
- Required commands passed.
- Worktree contains only intended files.

If ready, propose a commit message with the correct prefix.
Only run git commit/push if explicitly requested.

Output:
- Ship verdict
- Commands passed
- Review blockers
- Files included
- Recommended commit message
- Post-ship notes
```
