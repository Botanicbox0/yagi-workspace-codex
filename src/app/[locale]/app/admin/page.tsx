export default function AdminPage() {
  return (
    <>
      <header className="page-header">
        <div>
          <span className="eyebrow">관리자</span>
          <h1>운영 관리</h1>
        </div>
        <p>워크스페이스, 클라이언트, 챌린지 운영을 YAGI 역할에만 노출합니다.</p>
      </header>

      <section className="panel-grid">
        <article className="panel">
          <h2>워크스페이스</h2>
          <p>클라이언트 조직과 멤버십 관리가 연결될 영역입니다.</p>
        </article>
        <article className="panel">
          <h2>챌린지 관리</h2>
          <p>공개 챌린지와 심사 운영은 내부 관리자 표면에서 다룹니다.</p>
        </article>
      </section>
    </>
  );
}
