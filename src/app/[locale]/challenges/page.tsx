import Link from "next/link";

import { isLocale, localePath, type Locale } from "@/i18n/config";

type ChallengesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ChallengesPage({ params }: ChallengesPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return (
    <main className="public-main">
      <section className="public-hero">
        <span className="eyebrow">YAGI Challenge</span>
        <h1>창작자를 위한 캠페인 보드</h1>
        <p>
          공개 챌린지는 프라이빗 작업 공간과 분리된 표면에서 운영됩니다. 익명
          투표 흐름은 MVP 범위에 포함하지 않습니다.
        </p>
        <div className="button-row">
          <Link
            className="button-primary"
            href={localePath(locale, "/challenges/sample-campaign")}
          >
            샘플 챌린지 보기
          </Link>
        </div>
      </section>
    </main>
  );
}
