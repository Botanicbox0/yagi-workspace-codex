import { redirect } from "next/navigation";

import { localePath, defaultLocale } from "@/i18n/config";

export default function RootPage() {
  redirect(localePath(defaultLocale, "/app"));
}
