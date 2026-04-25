import Link from "next/link";

import { ChallengeCard } from "@/components/public/ChallengeCard";
import { isLocale, localePath, type Locale } from "@/i18n/config";

type ChallengesPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function ChallengesPage({ params }: ChallengesPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return (
    <main className="public-main">
      <section className="public-hero public-hero--challenge">
        <div className="public-hero__copy">
          <span className="eyebrow">YAGI Challenge</span>
          <h1>브랜드와 창작자를 위한 시각 캠페인 보드</h1>
          <p>
            공개 챌린지는 프라이빗 작업 공간과 분리된 표면에서 운영합니다. 제출,
            심사, 선정 흐름은 다음 게이트에서 연결됩니다.
          </p>
          <div className="button-row">
            <Link
              className="button-primary"
              href={localePath(locale, "/challenges/sample-campaign")}
            >
              샘플 챌린지 보기
            </Link>
          </div>
        </div>
        <div className="public-hero__frame" aria-hidden="true">
          <span className="frame-label">campaign board</span>
          <div className="frame-stack">
            <i />
            <i />
            <i />
          </div>
        </div>
      </section>

      <section className="challenge-section" aria-label="챌린지 목록">
        <div className="section-heading">
          <span className="eyebrow">진행 예정</span>
          <h2>운영 표면 미리보기</h2>
        </div>
        <ChallengeCard
          deadline="마감 준비 중"
          description="요구사항, 일정, 제출 기준을 명확히 보여주는 공개 챌린지 카드 자리입니다."
          href="/challenges/sample-campaign"
          locale={locale}
          meta="Visual campaign"
          title="Sample Campaign"
        />
      </section>
    </main>
  );
}
