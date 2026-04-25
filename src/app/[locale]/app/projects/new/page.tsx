import { EmptyState } from "@/components/app/EmptyState";
import { PageHeader } from "@/components/app/PageHeader";
import { SurfacePanel } from "@/components/app/SurfacePanel";

export default function NewProjectPage() {
  return (
    <>
      <PageHeader
        description="요청서와 브리프 입력은 다음 프로젝트 게이트에서 권한 경계와 함께 구현합니다."
        eyebrow="프리프로덕션"
        title="새 프로젝트"
      />

      <SurfacePanel>
        <EmptyState
          description="현재 게이트에서는 프로젝트 생성 전 화면의 구조와 시각 기준만 고정합니다."
          eyebrow="준비 중"
          title="프로젝트 생성 흐름을 준비하고 있습니다."
        />
      </SurfacePanel>
    </>
  );
}
