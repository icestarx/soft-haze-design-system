import type { ReactNode } from 'react';
import { Button } from '../components/Button';

export type SiteLink = { label: string; href?: string };

export function SiteHeader({ brand = '帧镜', links = [], action = '开始创作', children }: {
  brand?: string;
  links?: SiteLink[];
  action?: string;
  children?: ReactNode;
}) {
  return (
    <header className="sh-site-header">
      <a className="sh-site-brand" href="#" aria-label={`${brand}首页`}><span className="sh-site-brand__mark">帧</span>{brand}</a>
      <nav className="sh-site-nav" aria-label="主导航">
        {links.map((link) => <a key={link.label} href={link.href ?? '#'}>{link.label}</a>)}
      </nav>
      <div className="sh-site-header__actions">{children ?? <Button variant="primary" size="small">{action}</Button>}</div>
    </header>
  );
}
