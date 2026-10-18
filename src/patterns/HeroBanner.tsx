import type { ReactNode } from 'react';

export function HeroBanner({ eyebrow, title, description, actions, artwork }: {
  eyebrow?: string;
  title: string;
  description: string;
  actions?: ReactNode;
  artwork?: ReactNode;
}) {
  return (
    <section className="sh-hero-banner">
      <div className="sh-hero-banner__copy">
        {eyebrow && <span className="sh-hero-banner__eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{description}</p>
        {actions && <div className="sh-hero-banner__actions">{actions}</div>}
      </div>
      <div className="sh-hero-banner__art" aria-hidden={artwork ? undefined : 'true'}>{artwork ?? <span className="sh-hero-banner__orb" />}</div>
    </section>
  );
}
