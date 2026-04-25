import Link from "next/link";

import { localePath, type Locale } from "@/i18n/config";

type ChallengeCardProps = {
  deadline: string;
  description: string;
  href: `/${string}`;
  locale: Locale;
  meta: string;
  title: string;
};

export function ChallengeCard({
  deadline,
  description,
  href,
  locale,
  meta,
  title,
}: ChallengeCardProps) {
  return (
    <article className="challenge-card">
      <div className="challenge-card__visual" aria-hidden="true">
        <span />
      </div>
      <div className="challenge-card__body">
        <div className="challenge-card__meta">
          <span>{meta}</span>
          <span>{deadline}</span>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="text-link" href={localePath(locale, href)}>
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
