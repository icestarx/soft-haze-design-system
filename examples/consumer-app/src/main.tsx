import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Alert, availableThemes, Button, Card, EmptyState, ThemeProvider, useTheme } from 'soft-haze-design-system';
import 'soft-haze-design-system/styles.css';
import './styles.css';

function ThemePicker() {
  const { theme, setTheme } = useTheme();
  return (
    <label className="consumer-theme">
      <span>颜色主题</span>
      <select value={theme} onChange={(event) => setTheme(event.target.value as typeof theme)}>
        {availableThemes.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}
      </select>
    </label>
  );
}

function App() {
  return (
    <ThemeProvider>
      <main className="consumer-page">
        <header className="consumer-header">
          <a className="consumer-brand" href="#top"><span>雾</span>新项目</a>
          <ThemePicker />
        </header>
        <section className="consumer-hero" id="top">
          <div>
            <p className="consumer-eyebrow">BUILT WITH SOFT HAZE</p>
            <h1>从包入口，<br /><em>直接复用设计系统。</em></h1>
            <p className="consumer-lead">这是独立 Vite 项目。组件、页面模板与 CSS 都从安装后的包中导入。</p>
            <div className="consumer-actions"><Button variant="primary">开始使用</Button><Button variant="soft">了解更多</Button></div>
          </div>
          <Card className="consumer-card">
            <p className="consumer-eyebrow">PROJECT STATUS</p>
            <h2>接入成功</h2>
            <Alert tone="success" title="设计系统已加载">主题、组件与样式均来自包导出。</Alert>
            <EmptyState title="创建你的第一个页面" description="从基础组件和页面模式开始组合。" icon="✦" />
          </Card>
        </section>
        <footer>柔雾霞光设计系统 · 独立接入示例</footer>
      </main>
    </ThemeProvider>
  );
}

createRoot(document.getElementById('root')!).render(<StrictMode><App /></StrictMode>);
