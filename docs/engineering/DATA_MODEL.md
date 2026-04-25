# Data Model

This is a schema blueprint. Match naming to existing repo conventions.

## 1. Identity and access

### profiles

- id
- email
- display_name
- handle
- avatar_asset_id
- profile_role: `creator | studio | observer | null`
- created_at
- updated_at

### organizations

- id
- name
- slug
- kind: `yagi | client | creator_studio`
- created_at
- updated_at

### workspaces

- id
- organization_id
- name
- slug
- created_at
- updated_at

### workspace_memberships

- id
- workspace_id
- user_id
- role: `yagi_admin | yagi_member | client_admin | client_member`
- created_at
- updated_at

## 2. Projects

### projects

- id
- workspace_id
- client_organization_id
- title
- slug
- description
- status: `planning | production | review | revision | completed | archived`
- starts_at
- due_at
- created_by
- created_at
- updated_at

### project_members

- id
- project_id
- user_id
- role
- created_at

### project_deadlines

- id
- project_id
- title
- due_at
- stage
- completed_at
- created_by
- created_at
- updated_at

## 3. Boards

### boards

- id
- project_id
- title
- status: `draft | active | locked | archived`
- current_snapshot_id
- created_by
- created_at
- updated_at

### board_nodes

- id
- board_id
- type: `text | image | video | file | embed | ai_suggestion | approval`
- position_x
- position_y
- width
- height
- content_json
- asset_version_id
- visibility: `shared | yagi_internal`
- locked_at
- created_by
- created_at
- updated_at

### board_edges

- id
- board_id
- source_node_id
- target_node_id
- kind
- created_at

### board_snapshots

- id
- board_id
- title
- reason
- snapshot_json
- created_by
- created_at

## 4. Assets

### assets

- id
- owner_workspace_id
- owner_project_id
- owner_submission_id
- kind: `image | video | pdf | design_file | archive | other`
- canonical_name
- current_version_id
- created_by
- created_at
- updated_at

### asset_versions

- id
- asset_id
- version_number
- r2_bucket
- r2_key
- mime_type
- byte_size
- checksum
- width
- height
- duration_seconds
- thumbnail_r2_key
- status: `uploading | ready | failed | deleted`
- created_by
- created_at

### asset_usages

- id
- asset_version_id
- context_type: `board_node | project | contest_submission | creator_profile | showcase`
- context_id
- created_at

## 5. Comments and approvals

### comment_threads

- id
- context_type: `board | board_node | asset_version | contest_submission`
- context_id
- visibility: `shared | yagi_internal`
- status: `open | resolved`
- created_by
- created_at
- updated_at

### comments

- id
- thread_id
- body
- created_by
- created_at
- updated_at

### approvals

- id
- context_type: `board | board_node | asset_version | project`
- context_id
- status: `requested | approved | changes_requested | revoked`
- requested_by
- decided_by
- decided_at
- note
- created_at

### activity_events

- id
- actor_id
- workspace_id
- project_id
- contest_id
- event_type
- payload_json
- created_at

## 6. Contests

### contests

- id
- owner_workspace_id
- client_organization_id
- title
- slug
- brief
- status: `draft | review | scheduled | open | closed | judging | winner_selected | archived`
- starts_at
- ends_at
- judging_mode: `internal_jury | client_jury | hybrid_manual`
- hero_asset_version_id
- rules_json
- submission_schema_json
- created_by
- published_at
- created_at
- updated_at

### contest_submissions

- id
- contest_id
- creator_profile_id
- title
- description
- status: `draft | submitted | under_review | needs_revision | accepted | rejected | finalist | winner`
- data_json
- submitted_at
- created_at
- updated_at

### contest_submission_assets

- id
- submission_id
- asset_version_id
- field_key
- created_at

### contest_scores

- id
- contest_id
- submission_id
- judge_user_id
- score
- note
- created_at
- updated_at

## 7. Creator profiles

### creator_profiles

- id
- user_id
- handle
- display_name
- bio
- role_tags
- tool_tags
- avatar_asset_version_id
- cover_asset_version_id
- created_at
- updated_at

Deferred:
- creator_follows
- creator_stars
- workflow_pages

## 8. AI

### ai_suggestions

- id
- workspace_id
- project_id
- contest_id
- board_id
- kind
- status: `generated | reviewed | accepted | dismissed | converted_to_board_node`
- title
- body
- payload_json
- model
- provider
- created_by
- accepted_by
- accepted_at
- created_at

### ai_usage_events

- id
- user_id
- provider
- model
- feature
- input_units
- output_units
- image_count
- cost_estimate
- context_type
- context_id
- created_at

## 9. Notifications

### notifications

- id
- user_id
- event_type
- title
- body
- href
- read_at
- created_at

### email_events

- id
- notification_id
- recipient
- provider_message_id
- status
- created_at

### kakao_events

Deferred until integration is active.
