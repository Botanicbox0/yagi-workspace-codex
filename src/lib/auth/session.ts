import { cookies } from "next/headers";

import {
  isProfileRole,
  isWorkspaceRole,
  type ProfileRole,
  type RouteUserContext,
  type WorkspaceRole,
} from "@/lib/auth/roles";

const devUserId = "00000000-0000-4000-8000-000000000001";

function parseWorkspaceRole(value: string | undefined): WorkspaceRole | null {
  return value && isWorkspaceRole(value) ? value : null;
}

function parseProfileRoles(value: string | undefined): ProfileRole[] {
  if (!value) {
    return [];
  }

  return value
    .split(",")
    .map((role) => role.trim())
    .filter(isProfileRole);
}

export async function getCurrentUserContext(): Promise<RouteUserContext | null> {
  if (process.env.NODE_ENV === "production") {
    return null;
  }

  const cookieStore = await cookies();
  const workspaceRole = parseWorkspaceRole(
    process.env.YAGI_DEV_WORKSPACE_ROLE ??
      cookieStore.get("yagi_dev_workspace_role")?.value,
  );
  const profileRoles = parseProfileRoles(
    process.env.YAGI_DEV_PROFILE_ROLES ??
      cookieStore.get("yagi_dev_profile_roles")?.value,
  );

  if (!workspaceRole && profileRoles.length === 0) {
    return null;
  }

  return {
    id: process.env.YAGI_DEV_USER_ID ?? devUserId,
    email: process.env.YAGI_DEV_EMAIL ?? "studio@yagiworkshop.xyz",
    displayName: process.env.YAGI_DEV_DISPLAY_NAME ?? "YAGI Studio",
    workspaceMemberships: workspaceRole
      ? [
          {
            workspaceId: "dev-workspace",
            workspaceName: "YAGI Workspace",
            role: workspaceRole,
          },
        ]
      : [],
    profileRoles,
  };
}
