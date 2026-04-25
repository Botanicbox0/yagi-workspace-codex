import { PublicSurface } from "@/components/public/PublicSurface";
import { isLocale, type Locale } from "@/i18n/config";

type ShowcasePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function ShowcasePage({ params }: ShowcasePageProps) {
  const { locale: rawLocale, slug } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "ko";

  return (
    <PublicSurface locale={locale} tone="profile">
      <main className="public-main">
        <section className="public-hero">
          <span className="eyebrow">Showcase</span>
          <h1>{slug}</h1>
          <p>승인된 공개 작업만 노출하는 쇼케이스 표면입니다.</p>
        </section>
      </main>
    </PublicSurface>
  );
}
