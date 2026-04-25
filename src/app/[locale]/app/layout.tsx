import type { ReactNode } from "react";

import { AppShell } from "@/components/app/AppShell";
import { isLocale, type Locale } from "@/i18n/config";
import { requirePrivateAppAccess } from "@/lib/auth/guards";

type PrivateAppLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export const dynamic = "force-dynamic";

export default async function PrivateAppLayout({
  children,
  params,
}: PrivateAppLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const user = await requirePrivateAppAccess(locale);

  return (
    <AppShell locale={locale} user={user}>
      {children}
    </AppShell>
  );
}
