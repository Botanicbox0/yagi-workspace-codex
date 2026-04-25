import { PageHeader } from "@/components/app/PageHeader";
import { SurfacePanel } from "@/components/app/SurfacePanel";

export default function AdminPage() {
  return (
    <>
      <PageHeader
        description="워크스페이스, 클라이언트, 챌린지 운영은 YAGI 역할에서만 접근하는 내부 표면입니다."
        eyebrow="관리자"
        title="운영 관리"
      />

      <section className="panel-grid">
        <SurfacePanel title="워크스페이스">
          <p>클라이언트 조직과 멤버 관리가 연결될 관리자 영역입니다.</p>
        </SurfacePanel>
        <SurfacePanel title="챌린지 관리">
          <p>공개 챌린지와 심사 운영은 공개 표면과 분리된 관리자 화면에서 다룹니다.</p>
        </SurfacePanel>
      </section>
    </>
  );
}
