export default function AppHomePage() {
  return (
    <>
      <header className="page-header">
        <div>
          <span className="eyebrow">프라이빗 스튜디오</span>
          <h1>오늘의 작업</h1>
        </div>
        <p>프로젝트, 승인, 일정이 한 화면에서 이어지도록 준비된 작업 공간입니다.</p>
      </header>

      <section className="panel-grid" aria-label="작업 요약">
        <article className="panel">
          <h2>프로젝트</h2>
          <p>클라이언트 협업 보드와 파일 흐름이 이곳에 연결됩니다.</p>
          <div className="meta-row">
            <span className="pill">Gate 1</span>
            <span className="pill">Route Guard</span>
          </div>
        </article>
        <article className="panel">
          <h2>챌린지 운영</h2>
          <p>공개 챌린지와 내부 관리 화면은 별도 표면으로 유지됩니다.</p>
          <div className="meta-row">
            <span className="pill">Admin only</span>
          </div>
        </article>
        <article className="panel">
          <h2>권한 모델</h2>
          <p>작업 공간 역할과 창작자 프로필 역할을 분리해 다음 게이트의 RLS에 맞춥니다.</p>
          <div className="meta-row">
            <span className="pill">ko default</span>
          </div>
        </article>
      </section>
    </>
  );
}
