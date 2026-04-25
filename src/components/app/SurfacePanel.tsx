import type { ReactNode } from "react";

type SurfacePanelProps = {
  children: ReactNode;
  className?: string;
  eyebrow?: string;
  title?: string;
};

export function SurfacePanel({
  children,
  className,
  eyebrow,
  title,
}: SurfacePanelProps) {
  const classNames = ["surface-panel", className].filter(Boolean).join(" ");

  return (
    <section className={classNames}>
      {eyebrow || title ? (
        <div className="surface-panel__header">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          {title ? <h2>{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
