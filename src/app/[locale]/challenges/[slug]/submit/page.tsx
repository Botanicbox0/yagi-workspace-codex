import { isLocale, type Locale } from "@/i18n/config";
import { requireChallengeSubmissionAccess } from "@/lib/auth/guards";

type ChallengeSubmitPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamic = "force-dynamic";

export default async function ChallengeSubmitPage({
  params,
}: ChallengeSubmitPageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";
  const user = await requireChallengeSubmissionAccess(locale);

  return (
    <main className="public-main">
      <section className="submission-panel">
        <span className="eyebrow">제출</span>
        <h1>{slug}</h1>
        <p>{user.displayName} 님의 창작물 제출 흐름을 연결할 자리입니다.</p>
      </section>
    </main>
  );
}
