import Link from "next/link";
import type { ReactNode } from "react";

import { localePath, type Locale } from "@/i18n/config";
import {
  getPrimaryWorkspaceRole,
  hasYagiAdminRole,
  type RouteUserContext,
} from "@/lib/auth/roles";

type AppShellProps = {
  children: ReactNode;
  locale: Locale;
  user: RouteUserContext;
};

const navigationGroups = [
  {
    label: "작업",
    items: [
      { label: "프로젝트", href: "/app/projects" },
      { label: "프리프로덕션", href: "/app/projects/new" },
      { label: "릴리즈", href: "/app/projects" },
    ],
  },
  {
    label: "운영",
    items: [
      { label: "알림", href: "/app/notifications" },
      { label: "설정", href: "/app/settings" },
    ],
  },
] as const;

export function AppShell({ children, locale, user }: AppShellProps) {
  const primaryRole = getPrimaryWorkspaceRole(user);
  const adminHref = localePath(locale, "/app/admin");

  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="YAGI Workspace">
        <Link className="brand-mark" href={localePath(locale, "/app")}>
          <span>YAGI</span>
          <strong>Workspace</strong>
        </Link>

        <div className="scope-card">
          <span className="eyebrow">현재 범위</span>
          <strong>{user.workspaceMemberships[0]?.workspaceName}</strong>
          <small>{primaryRole ?? "profile"}</small>
        </div>

        <nav className="sidebar-nav" aria-label="작업 내비게이션">
          {navigationGroups.map((group) => (
            <section className="nav-group" key={group.label}>
              {group.items.length > 1 ? <h2>{group.label}</h2> : null}
              {group.items.map((item) => (
                <Link key={item.href} href={localePath(locale, item.href)}>
                  {item.label}
                </Link>
              ))}
            </section>
          ))}

          {hasYagiAdminRole(user) ? (
            <section className="nav-group">
              <h2>시스템</h2>
              <Link href={adminHref}>관리자</Link>
            </section>
          ) : null}
        </nav>
      </aside>

      <main className="app-main">{children}</main>
    </div>
  );
}
