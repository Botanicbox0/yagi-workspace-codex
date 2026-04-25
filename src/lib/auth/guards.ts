import { redirect } from "next/navigation";

import { localePath, type Locale } from "@/i18n/config";
import { getCurrentUserContext } from "@/lib/auth/session";
import {
  hasCreatorAccess,
  hasPrivateWorkspaceAccess,
  hasYagiAdminRole,
  type RouteUserContext,
} from "@/lib/auth/roles";

export async function requirePrivateAppAccess(
  locale: Locale,
): Promise<RouteUserContext> {
  const user = await getCurrentUserContext();

  if (!user || !hasPrivateWorkspaceAccess(user)) {
    redirect(localePath(locale, "/sign-in"));
  }

  return user;
}

export async function requireAdminAccess(locale: Locale): Promise<void> {
  const user = await getCurrentUserContext();

  if (!user) {
    redirect(localePath(locale, "/sign-in"));
  }

  if (!hasYagiAdminRole(user)) {
    redirect(localePath(locale, "/app/access-denied"));
  }
}

export async function requireChallengeSubmissionAccess(
  locale: Locale,
): Promise<RouteUserContext> {
  const user = await getCurrentUserContext();

  if (!user) {
    redirect(localePath(locale, "/sign-in"));
  }

  if (!hasCreatorAccess(user)) {
    redirect(localePath(locale, "/app/access-denied"));
  }

  return user;
}
