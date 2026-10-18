import type { ReactNode } from 'react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { HeroBanner } from '../patterns/HeroBanner';
import { SiteHeader, type SiteLink } from '../patterns/SiteHeader';

export function HomeTemplate({ brand = '帧镜', links = [], title = '让灵感，慢慢变成一部作品。', description = '从故事到分镜，再到动态影像。把每个创作步骤放在一个明亮、安定的空间里。', children }: {
  brand?: string;
  links?: SiteLink[];
  title?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <div className="sh-page-template sh-home-template">
      <SiteHeader brand={brand} links={links} />
      <main className="sh-home-template__main">
        <HeroBanner
          eyebrow="AI STORY STUDIO · 创作从此刻开始"
          title={title}
          description={description}
          actions={<><Button variant="primary">开始创作 <span aria-hidden="true">↗</span></Button><Button variant="soft">看看创作流程</Button></>}
          artwork={<div className="sh-home-art"><div className="sh-home-art__sun" /><div className="sh-home-art__ridge sh-home-art__ridge--back" /><div className="sh-home-art__ridge sh-home-art__ridge--front" /><span>灵感放映厅</span></div>}
        />
        <div className="sh-home-meta"><Badge tone="warm">从一个念头开始</Badge><span>故事 · 角色 · 分镜 · 影像</span></div>
        {children}
      </main>
    </div>
  );
}
