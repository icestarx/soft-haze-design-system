import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { AppSidebar, type NavigationItem } from '../patterns/AppSidebar';
import { FilterToolbar } from '../patterns/FilterToolbar';
import { PageHeading } from '../patterns/PageHeading';

export function WorkspaceTemplate({ title = '我的作品', description = '整理创作中的故事与影像。', activeItem = '我的作品', navItems = [{ label: '工作台' }, { label: '我的作品' }, { label: '我的素材' }, { label: '灵感收藏' }], children }: {
  title?: string;
  description?: string;
  activeItem?: string;
  navItems?: NavigationItem[];
  children?: ReactNode;
}) {
  return (
    <div className="sh-page-template sh-workspace-template">
      <AppSidebar items={navItems} activeItem={activeItem} />
      <div className="sh-workspace-template__main">
        <header className="sh-workspace-topbar"><span>创作空间 <i>/</i> {title}</span><div><span className="sh-status-dot" />所有更改已保存 <span className="sh-avatar">林</span></div></header>
        <main className="sh-workspace-content">
          <PageHeading title={title} description={description} actions={<Button variant="primary">＋ 新建作品</Button>} />
          <FilterToolbar placeholder="搜索作品"><button className="sh-filter-chip" type="button">全部作品⌄</button><button className="sh-filter-chip" type="button">最近更新⌄</button></FilterToolbar>
          {children}
        </main>
      </div>
    </div>
  );
}
