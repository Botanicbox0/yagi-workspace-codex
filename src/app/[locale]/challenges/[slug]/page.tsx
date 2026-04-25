import Link from "next/link";

import { isLocale, localePath, type Locale } from "@/i18n/config";

type ChallengeDetailPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ChallengeDetailPage({
  params,
}: ChallengeDetailPageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return (
    <main className="public-main">
      <section className="public-hero">
        <span className="eyebrow">Challenge</span>
        <h1>{slug}</h1>
        <p>
          시각 자료, 제출 조건, 일정이 들어갈 공개 챌린지 상세 화면입니다.
          비공개 클라이언트 작업 데이터는 이 표면에 노출하지 않습니다.
        </p>
        <div className="button-row">
          <Link
            className="button-primary"
            href={localePath(locale, `/challenges/${slug}/submit`)}
          >
            제출 준비
          </Link>
          <Link className="button-secondary" href={localePath(locale, "/challenges")}>
            목록으로
          </Link>
        </div>
      </section>
    </main>
  );
}
