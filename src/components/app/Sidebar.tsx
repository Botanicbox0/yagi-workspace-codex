"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { localePath, type Locale } from "@/i18n/config";

type SidebarProps = {
  displayName: string;
  isAdmin: boolean;
  locale: Locale;
  roleLabel: string;
  workspaceName: string;
};

type NavigationItem = {
  label: string;
  href: `/${string}`;
};

type NavigationGroup = {
  label: string;
  items: NavigationItem[];
};

const baseNavigationGroups: NavigationGroup[] = [
  {
    label: "작업",
    items: [
      { label: "프로젝트", href: "/app/projects" },
      { label: "프리프로덕션", href: "/app/projects/new" },
    ],
  },
  {
    label: "소통",
    items: [
      { label: "알림", href: "/app/notifications" },
      { label: "설정", href: "/app/settings" },
    ],
  },
];

const adminNavigationGroup: NavigationGroup = {
  label: "시스템",
  items: [
    { label: "관리자", href: "/app/admin" },
    { label: "챌린지 관리", href: "/app/admin/challenges" },
  ],
};

function pathMatches(pathname: string, href: string): boolean {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Sidebar({
  displayName,
  isAdmin,
  locale,
  roleLabel,
  workspaceName,
}: SidebarProps) {
  const pathname = usePathname();
  const appHomeHref = localePath(locale, "/app");
  const navigationGroups = isAdmin
    ? [...baseNavigationGroups, adminNavigationGroup]
    : baseNavigationGroups;
  const activeHref = navigationGroups
    .flatMap((group) => group.items)
    .map((item) => localePath(locale, item.href))
    .filter((href) => pathMatches(pathname, href))
    .sort((left, right) => right.length - left.length)[0];

  return (
    <aside className="app-sidebar" aria-label="YAGI Workspace">
      <Link
        className="brand-mark"
        data-active={pathname === appHomeHref}
        href={appHomeHref}
      >
        <span className="brand-kicker">YAGI</span>
        <strong>Workspace</strong>
      </Link>

      <div className="scope-card">
        <span className="eyebrow">현재 범위</span>
        <strong>{workspaceName}</strong>
        <span>{roleLabel}</span>
      </div>

      <nav className="sidebar-nav" aria-label="작업 내비게이션">
        {navigationGroups.map((group) => (
          <section className="nav-group" key={group.label}>
            {group.items.length > 1 ? <h2>{group.label}</h2> : null}
            {group.items.map((item) => {
              const href = localePath(locale, item.href);

              return (
                <Link
                  aria-current={href === activeHref ? "page" : undefined}
                  href={href}
                  key={`${group.label}-${item.label}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </section>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span className="eyebrow">세션</span>
        <strong>{displayName}</strong>
      </div>
    </aside>
  );
}
