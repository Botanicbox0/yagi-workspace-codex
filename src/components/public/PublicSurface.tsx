import Link from "next/link";
import type { ReactNode } from "react";

import { localePath, type Locale } from "@/i18n/config";

type PublicSurfaceProps = {
  children: ReactNode;
  locale: Locale;
  tone?: "challenge" | "profile";
};

export function PublicSurface({
  children,
  locale,
  tone = "challenge",
}: PublicSurfaceProps) {
  return (
    <div className={`public-surface public-surface--${tone}`}>
      <header className="public-header">
        <Link href={localePath(locale, "/challenges")} className="public-brand">
          <span>YAGI</span>
          <strong>{tone === "challenge" ? "Challenge" : "Archive"}</strong>
        </Link>
        <nav aria-label="공개 내비게이션">
          <Link href={localePath(locale, "/challenges")}>챌린지</Link>
          <Link href={localePath(locale, "/showcase/selected")}>쇼케이스</Link>
        </nav>
      </header>
      {children}
    </div>
  );
}
