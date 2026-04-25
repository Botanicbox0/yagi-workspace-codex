import { isLocale, type Locale } from "@/i18n/config";

type SignInPageProps = {
  params: Promise<{ locale: string }>;
};

export default async function SignInPage({ params }: SignInPageProps) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : "ko";
  const isKorean = safeLocale === "ko";

  return (
    <main className="public-main">
      <section className="submission-panel">
        <span className="eyebrow">{isKorean ? "로그인" : "Sign in"}</span>
        <h1>{isKorean ? "접근 권한이 필요합니다." : "Access required."}</h1>
        <p>
          {isKorean
            ? "Supabase 인증 연결 전까지 비공개 작업 공간은 서버 가드로 닫혀 있습니다."
            : "Private workspace routes are closed by server guards until Supabase auth is connected."}
        </p>
      </section>
    </main>
  );
}
