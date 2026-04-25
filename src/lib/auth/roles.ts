export const workspaceRoles = [
  "yagi_admin",
  "yagi_member",
  "client_admin",
  "client_member",
] as const;

export const profileRoles = ["creator", "studio", "observer"] as const;

export type WorkspaceRole = (typeof workspaceRoles)[number];
export type ProfileRole = (typeof profileRoles)[number];

export type WorkspaceMembership = {
  workspaceId: string;
  workspaceName: string;
  role: WorkspaceRole;
};

export type RouteUserContext = {
  id: string;
  email: string;
  displayName: string;
  workspaceMemberships: WorkspaceMembership[];
  profileRoles: ProfileRole[];
};

export function isWorkspaceRole(value: string): value is WorkspaceRole {
  return workspaceRoles.includes(value as WorkspaceRole);
}

export function isProfileRole(value: string): value is ProfileRole {
  return profileRoles.includes(value as ProfileRole);
}

export function hasYagiRole(user: RouteUserContext): boolean {
  return user.workspaceMemberships.some((membership) =>
    ["yagi_admin", "yagi_member"].includes(membership.role),
  );
}

export function hasYagiAdminRole(user: RouteUserContext): boolean {
  return user.workspaceMemberships.some(
    (membership) => membership.role === "yagi_admin",
  );
}

export function hasPrivateWorkspaceAccess(user: RouteUserContext): boolean {
  return user.workspaceMemberships.length > 0;
}

export function hasCreatorAccess(user: RouteUserContext): boolean {
  return user.profileRoles.includes("creator") || hasYagiRole(user);
}

export function getPrimaryWorkspaceRole(
  user: RouteUserContext,
): WorkspaceRole | null {
  return user.workspaceMemberships[0]?.role ?? null;
}
