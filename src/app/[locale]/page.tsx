import { redirect } from "next/navigation";

import { isLocale, localePath } from "@/i18n/config";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (isLocale(locale)) {
    redirect(localePath(locale, "/app"));
  }

  redirect("/ko/app");
}
