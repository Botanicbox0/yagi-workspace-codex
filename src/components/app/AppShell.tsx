import type { ReactNode } from "react";

import { type Locale } from "@/i18n/config";
import {
  getPrimaryWorkspaceRole,
  hasYagiAdminRole,
  type RouteUserContext,
} from "@/lib/auth/roles";

import { Sidebar } from "./Sidebar";

type AppShellProps = {
  children: ReactNode;
  locale: Locale;
  user: RouteUserContext;
};

const roleLabels: Record<string, string> = {
  yagi_admin: "YAGI 관리자",
  yagi_member: "YAGI 멤버",
  client_admin: "클라이언트 관리자",
  client_member: "클라이언트 멤버",
};

export function AppShell({ children, locale, user }: AppShellProps) {
  const primaryRole = getPrimaryWorkspaceRole(user);

  return (
    <div className="app-shell">
      <Sidebar
        displayName={user.displayName}
        isAdmin={hasYagiAdminRole(user)}
        locale={locale}
        roleLabel={primaryRole ? roleLabels[primaryRole] : "프로필"}
        workspaceName={user.workspaceMemberships[0]?.workspaceName ?? "YAGI"}
      />
      <main className="app-main">{children}</main>
    </div>
  );
}
