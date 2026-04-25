import { EmptyState } from "@/components/app/EmptyState";
import { SurfacePanel } from "@/components/app/SurfacePanel";

export default function AccessDeniedPage() {
  return (
    <SurfacePanel className="notice-panel">
      <EmptyState
        description="현재 역할로는 접근할 수 없는 작업 범위입니다. 필요한 경우 YAGI 운영자에게 권한 확인을 요청하세요."
        eyebrow="권한 확인"
        title="이 화면을 볼 수 없습니다."
      />
    </SurfacePanel>
  );
}
