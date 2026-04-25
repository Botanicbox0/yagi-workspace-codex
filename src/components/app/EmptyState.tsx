import type { ReactNode } from "react";

type EmptyStateProps = {
  action?: ReactNode;
  description: string;
  eyebrow?: string;
  title: string;
};

export function EmptyState({
  action,
  description,
  eyebrow = "비어 있음",
  title,
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{description}</p>
      {action ? <div className="empty-state__action">{action}</div> : null}
    </div>
  );
}
