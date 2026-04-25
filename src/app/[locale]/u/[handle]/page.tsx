import { PublicSurface } from "@/components/public/PublicSurface";
import { isLocale, type Locale } from "@/i18n/config";

type CreatorProfilePageProps = {
  params: Promise<{ locale: string; handle: string }>;
};

export default async function CreatorProfilePage({
  params,
}: CreatorProfilePageProps) {
  const { locale: rawLocale, handle } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return (
    <PublicSurface locale={locale} tone="profile">
      <main className="public-main">
        <section className="public-hero public-hero--profile">
          <div className="public-hero__copy">
            <span className="eyebrow">Creator</span>
            <h1>@{handle}</h1>
            <p>
              창작자 프로필은 클라이언트 워크스페이스와 분리된 공개 아카이브
              표면으로 운영합니다.
            </p>
          </div>
        </section>
      </main>
    </PublicSurface>
  );
}
