import { PageHeader } from "@/components/app/PageHeader";
import { SurfacePanel } from "@/components/app/SurfacePanel";

const workSummary = [
  {
    title: "프로젝트",
    description:
      "브리프, 보드, 파일, 승인 흐름이 한 작업 범위 안에서 이어지도록 준비된 공간입니다.",
    meta: ["Gate 1", "Route guard"],
  },
  {
    title: "챌린지 운영",
    description:
      "공개 챌린지와 내부 운영 화면은 분리되어 있으며, 관리자 역할에서만 노출됩니다.",
    meta: ["Admin only"],
  },
  {
    title: "권한 모델",
    description:
      "워크스페이스 역할과 창작자 프로필 역할을 분리해 다음 게이트의 RLS 기준을 보존합니다.",
    meta: ["ko default"],
  },
];

export default function AppHomePage() {
  return (
    <>
      <PageHeader
        description="오늘 확인해야 할 프로젝트, 승인, 일정의 흐름을 차분하게 모아두는 작업실입니다."
        eyebrow="프라이빗 스튜디오"
        title="오늘의 작업"
      />

      <section className="panel-grid" aria-label="작업 요약">
        {workSummary.map((item) => (
          <SurfacePanel key={item.title} title={item.title}>
            <p>{item.description}</p>
            <div className="meta-row">
              {item.meta.map((meta) => (
                <span className="pill" key={meta}>
                  {meta}
                </span>
              ))}
            </div>
          </SurfacePanel>
        ))}
      </section>
    </>
  );
}
