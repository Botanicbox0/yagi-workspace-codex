import type { ReactNode } from "react";

import { PublicSurface } from "@/components/public/PublicSurface";
import { isLocale, type Locale } from "@/i18n/config";

type ChallengesLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function ChallengesLayout({
  children,
  params,
}: ChallengesLayoutProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return <PublicSurface locale={locale}>{children}</PublicSurface>;
}
