import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, availableThemes, Badge, Button, Card, EmptyState, TextField, ThemeProvider, useTheme } from '../../../src';
import { PageShowcase } from './PageShowcase';
import '../../../src/styles.css';
import './preview.css';
import './page-showcase.css';

function ThemeControl() {
  const { theme, setTheme } = useTheme();
  const themeIndex = availableThemes.findIndex((item) => item.id === theme);
  const nextTheme = availableThemes[(themeIndex + 1) % availableThemes.length];
  const activeTheme = availableThemes.find((item) => item.id === theme);
  return (
    <button className="theme-control" type="button" onClick={() => setTheme(nextTheme.id)} aria-label={`切换到${nextTheme.label}主题`}>
      <span className="theme-control__dot" />
      <span>{activeTheme?.label}</span>
      <span className="theme-control__switch" aria-hidden="true"><i /></span>
    </button>
  );
}

const swatches = [
  ['品牌主色', 'var(--sh-brand-strong)', 'brand-strong'],
  ['品牌浅色', 'var(--sh-brand-soft)', 'brand-soft'],
  ['暖色点缀', 'var(--sh-accent-warm)', 'accent-warm'],
  ['清凉点缀', 'var(--sh-accent-cool)', 'accent-cool'],
  ['页面背景', 'var(--sh-canvas)', 'canvas'],
  ['卡片表面', 'var(--sh-surface)', 'surface'],
];

function Preview() {
  return (
    <ThemeProvider>
      <div className="preview-shell">
        <header className="topbar">
          <a className="wordmark" href="#top" aria-label="柔雾霞光设计系统首页"><span className="wordmark__mark">雾</span><span>柔雾霞光<small>DESIGN SYSTEM · 0.1.0</small></span></a>
          <nav className="topnav" aria-label="页面导航"><a href="#tokens">设计令牌</a><a href="#components">组件</a><a href="#page-templates">页面模板</a><a href="#principles">设计原则</a></nav>
          <ThemeControl />
        </header>

        <main id="top">
          <section className="hero">
            <div className="hero__copy">
              <Badge tone="warm">一套基础 · 多种主题</Badge>
              <h1>让每个项目，<br /><em>都有自己的霞光。</em></h1>
              <p>从柔和的色彩、轻盈的层次，到可复用的前端组件。切换主题，保持体验一致，也让每个品牌保留自己的表情。</p>
              <div className="hero__actions"><a className="hero-link" href="#components">浏览组件 <span>↓</span></a><code>npm run dev</code></div>
            </div>
            <div className="hero-art" aria-label="柔雾霞光渐变色彩示意图">
              <div className="hero-art__sun" /><div className="hero-art__horizon" />
              <span className="hero-art__label hero-art__label--one">soft haze</span>
              <span className="hero-art__label hero-art__label--two">a softer kind of light</span>
              <span className="hero-art__spark">✳</span>
            </div>
          </section>

          <section className="section" id="tokens">
            <div className="section-heading"><div><span className="eyebrow">01 / TOKENS</span><h2>颜色从语义出发</h2></div><p>组件引用颜色用途，主题负责提供色值。</p></div>
            <div className="swatch-grid">{swatches.map(([label, color, token]) => <div className="swatch" key={token}><div className="swatch__color" style={{ background: color }} /><div className="swatch__meta"><strong>{label}</strong><code>--sh-{token}</code></div></div>)}</div>
            <div className="token-note"><span>↗</span><p>切换右上角主题，观察同一套语义变量如何映射到另一组颜色。</p></div>
          </section>

          <section className="section section--components" id="components">
            <div className="section-heading"><div><span className="eyebrow">02 / COMPONENTS</span><h2>常用组件</h2></div><p>组件基于同一组语义令牌构建。</p></div>
            <div className="component-grid">
              <Card className="specimen-card">
                <div className="specimen-card__top"><span className="specimen-label">BUTTON</span><Badge>推荐</Badge></div>
                <h3>开始一段新创作</h3><p className="specimen-copy">柔和但清楚的层级，让主要操作自然浮现。</p>
                <div className="button-row"><Button variant="primary">主要操作</Button><Button variant="soft">柔和操作</Button><Button variant="quiet">次要操作</Button></div>
              </Card>
              <Card className="specimen-card specimen-card--form">
                <div className="specimen-card__top"><span className="specimen-label">FORM</span><Badge tone="success">自动保存</Badge></div>
                <h3>项目名称</h3><p className="specimen-copy">输入内容，预览字段与提示层级。</p>
                <TextField label="作品名称" placeholder="例如：云上来信" hint="最多 32 个字符" />
              </Card>
              <Card className="specimen-card specimen-card--states">
                <div className="specimen-card__top"><span className="specimen-label">SURFACES</span><Badge tone="warm">层次</Badge></div>
                <h3>轻盈的内容表面</h3><p className="specimen-copy">用微妙的边框和阴影区分内容，不让界面显得厚重。</p>
                <div className="mini-surface"><span className="mini-surface__icon">✦</span><span><strong>灵感已准备好</strong><small>继续完成你的故事设定</small></span><span className="mini-surface__arrow">↗</span></div>
              </Card>
            </div>
          </section>

          <PageShowcase />

          <section className="section interaction-showcase" id="states">
            <div className="section-heading"><div><span className="eyebrow">04 / INTERACTION</span><h2>把反馈状态也纳入系统</h2></div><p>加载、校验、通知与空内容都使用同一套语义色。</p></div>
            <div className="interaction-grid">
              <Card className="interaction-card">
                <span className="specimen-label">FEEDBACK</span>
                <h3>状态通知</h3>
                <Alert tone="success" title="保存成功">你的更改已同步。</Alert>
                <Alert tone="warning" title="还差一步">补全标题后即可继续。</Alert>
              </Card>
              <Card className="interaction-card">
                <span className="specimen-label">FORM STATES</span>
                <h3>操作与校验</h3>
                <div className="button-row"><Button variant="primary" loading>正在保存</Button><Button disabled>暂不可用</Button></div>
                <TextField label="邮箱地址" type="email" value="not-an-email" readOnly error="请输入有效的邮箱地址" />
              </Card>
              <Card className="interaction-card">
                <span className="specimen-label">EMPTY CONTENT</span>
                <h3>初次使用状态</h3>
                <EmptyState title="这里还没有项目" description="创建一个项目，开始收集你的灵感。" icon="✦" action={<Button variant="soft" size="small">创建项目</Button>} />
              </Card>
            </div>
          </section>

          <section className="section principles" id="principles">
            <div className="section-heading"><div><span className="eyebrow">05 / PRINCIPLES</span><h2>让风格保持轻盈</h2></div><p>把辨识度留给细节，把空间留给内容。</p></div>
            <div className="principle-grid"><article><span>01</span><h3>柔和层次</h3><p>以浅色画布、细腻边线和克制阴影建立空间感。</p></article><article><span>02</span><h3>语义换肤</h3><p>品牌色可以更换，交互含义和组件结构保持稳定。</p></article><article><span>03</span><h3>清楚易读</h3><p>在舒适气质之外，保留明确的文字层级与操作反馈。</p></article></div>
          </section>
        </main>
        <footer className="footer"><span>柔雾霞光设计系统</span><span>Made to be remixed · 0.1.0</span></footer>
      </div>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><Preview /></StrictMode>);
