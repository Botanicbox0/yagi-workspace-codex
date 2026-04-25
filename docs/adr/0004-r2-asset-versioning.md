# ADR 0004 — R2 Asset Versioning

Status: Accepted

## Context

YAGI wants to solve scattered file versions across Kakao, email, drives, and local filenames.

## Decision

Store binary files in Cloudflare R2 and store metadata/version history in Postgres.

Every uploaded file is an asset. Every replacement creates an asset version.

## Consequences

- Version history is structured.
- Latest/approved version is clear.
- File names are no longer the source of truth.
- Signed URL permission checks are required.
