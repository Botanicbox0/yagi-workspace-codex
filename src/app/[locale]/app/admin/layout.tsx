import type { ReactNode } from "react";

import { isLocale, type Locale } from "@/i18n/config";
import { requireAdminAccess } from "@/lib/auth/guards";

type AdminLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function AdminLayout({
  children,
  params,
}: AdminLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  await requireAdminAccess(locale);

  return children;
}
