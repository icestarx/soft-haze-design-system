import { useState } from 'react';
import { Badge, Card } from '../../../src';
import { EditorTemplate, HomeTemplate, WorkspaceTemplate } from '../../../src';

const pageTypes = [
  { id: 'home', label: '首页', note: '品牌表达 · 主视觉 · 内容展示' },
  { id: 'workspace', label: '功能页', note: '应用外壳 · 页面标题 · 筛选与列表' },
  { id: 'editor', label: '编辑器', note: '流程导航 · 主工作区 · 属性面板' },
] as const;

function HomePage() {
  return <HomeTemplate links={[{ label: '创作方式' }, { label: '作品灵感' }, { label: '常见问题' }]}>
    <div className="sh-demo-home-cards">
      <div><span>01</span><strong>写下故事</strong><small>从一个想法展开剧情</small></div>
      <div><span>02</span><strong>塑造画面</strong><small>让角色与场景有形</small></div>
      <div><span>03</span><strong>完成作品</strong><small>把分镜连成影像</small></div>
    </div>
  </HomeTemplate>;
}

function WorkspacePage() {
  return <WorkspaceTemplate>
    <div className="sh-demo-project-grid">
      {[
        { title: '云上来信', category: '电影短片', status: '继续创作', theme: 'violet' },
        { title: '夏日第七封信', category: '系列剧 · 04 集', status: '刚刚更新', theme: 'peach' },
        { title: '山海之间', category: '电影短片', status: '草稿', theme: 'mint' },
      ].map((project) => <Card key={project.title} className="sh-demo-project" padded={false}><div className={`sh-demo-project__art is-${project.theme}`}><span>{project.category}</span></div><div className="sh-demo-project__details"><strong>{project.title}</strong><small>{project.status}</small></div></Card>)}
    </div>
  </WorkspaceTemplate>;
}

function EditorPage() {
  return <EditorTemplate>
    <div className="sh-demo-shot"><div className="sh-demo-shot__art is-one"><span>场景 01</span></div><div><Badge>镜头 01</Badge><strong>暮色里的旧车站</strong><small>远景 · 缓慢推进</small></div><span className="sh-demo-shot__time">00:08</span></div>
    <div className="sh-demo-shot"><div className="sh-demo-shot__art is-two"><span>场景 02</span></div><div><Badge tone="warm">镜头 02</Badge><strong>她望向列车驶来的方向</strong><small>中景 · 侧面跟随</small></div><span className="sh-demo-shot__time">00:06</span></div>
  </EditorTemplate>;
}

export function PageShowcase() {
  const [active, setActive] = useState<(typeof pageTypes)[number]['id']>('home');
  return (
    <section className="section page-showcase" id="page-templates">
      <div className="section-heading"><div><span className="eyebrow">03 / PAGE PATTERNS</span><h2>从组件到整页</h2></div><p>用页面模式呈现完整的视觉层级。</p></div>
      <div className="page-showcase__tabs" role="tablist" aria-label="页面模板类型">
        {pageTypes.map((page) => <button key={page.id} type="button" role="tab" aria-selected={active === page.id} className={active === page.id ? 'is-active' : ''} onClick={() => setActive(page.id)}><strong>{page.label}</strong><small>{page.note}</small></button>)}
      </div>
      <div className="page-showcase__canvas" role="tabpanel" aria-label={`${pageTypes.find((page) => page.id === active)?.label}视觉模板`}>
        {active === 'home' && <HomePage />}
        {active === 'workspace' && <WorkspacePage />}
        {active === 'editor' && <EditorPage />}
      </div>
      <p className="page-showcase__caption">这些模板定义页面构图与内容层级；项目可以替换文字、图片、导航和业务内容，主题颜色仍由顶部控制。</p>
    </section>
  );
}
