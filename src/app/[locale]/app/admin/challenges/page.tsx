import { EmptyState } from "@/components/app/EmptyState";
import { PageHeader } from "@/components/app/PageHeader";
import { SurfacePanel } from "@/components/app/SurfacePanel";

export default function AdminChallengesPage() {
  return (
    <>
      <PageHeader
        description="공개 페이지와 분리된 YAGI 운영용 챌린지 관리 화면입니다."
        eyebrow="관리자"
        title="챌린지 관리"
      />

      <SurfacePanel>
        <EmptyState
          description="Gate 6에서 생성, 게시, 제출 심사 흐름을 연결합니다."
          eyebrow="초안 없음"
          title="아직 운영 중인 챌린지가 없습니다."
        />
      </SurfacePanel>
    </>
  );
}
