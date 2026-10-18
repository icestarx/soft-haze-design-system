import type { ReactNode } from 'react';

export type NavigationItem = { label: string; href?: string };

export function AppSidebar({ brand = '帧镜', items = [], activeItem, footer }: {
  brand?: string;
  items?: NavigationItem[];
  activeItem?: string;
  footer?: ReactNode;
}) {
  return (
    <aside className="sh-app-sidebar">
      <a className="sh-site-brand" href="#" aria-label={`${brand}工作台`}><span className="sh-site-brand__mark">帧</span>{brand}</a>
      <span className="sh-sidebar-label">创作空间</span>
      <nav className="sh-sidebar-nav" aria-label="工作台导航">
        {items.map((item) => <a key={item.label} href={item.href ?? '#'} aria-current={activeItem === item.label ? 'page' : undefined}>{item.label}</a>)}
      </nav>
      <div className="sh-sidebar-footer">{footer ?? <><span className="sh-avatar">林</span><span><strong>林间晚风</strong><small>个人空间</small></span></>}</div>
    </aside>
  );
}
