export default function ProjectsPage() {
  return (
    <>
      <header className="page-header">
        <div>
          <span className="eyebrow">작업</span>
          <h1>프로젝트</h1>
        </div>
        <p>보드, 파일, 일정, 승인 흐름이 연결될 프로젝트 목록 자리입니다.</p>
      </header>

      <section className="panel">
        <h2>아직 등록된 프로젝트가 없습니다.</h2>
        <p>Gate 3에서 프로젝트 생성과 클라이언트 배정 흐름을 연결합니다.</p>
      </section>
    </>
  );
}
