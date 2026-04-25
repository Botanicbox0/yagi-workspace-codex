import { EmptyState } from "@/components/app/EmptyState";
import { PageHeader } from "@/components/app/PageHeader";
import { SurfacePanel } from "@/components/app/SurfacePanel";

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        description="보드, 파일, 일정, 승인 흐름을 프로젝트 단위로 정리하는 목록 자리입니다."
        eyebrow="작업"
        title="프로젝트"
      />

      <SurfacePanel>
        <EmptyState
          description="아직 등록된 프로젝트가 없습니다. 다음 게이트에서 생성 흐름과 클라이언트 배정을 연결합니다."
          title="프로젝트 목록이 비어 있습니다."
        />
      </SurfacePanel>
    </>
  );
}
