import type { ReactNode } from 'react';
import { Button } from '../components/Button';
import { AppSidebar } from '../patterns/AppSidebar';

const defaultSteps = ['项目设置', '故事剧本', '素材准备', '分镜设计', '影像生成'];

export function EditorTemplate({ title = '故事分镜', steps = defaultSteps, activeStep = 3, children, inspector }: {
  title?: string;
  steps?: string[];
  activeStep?: number;
  children?: ReactNode;
  inspector?: ReactNode;
}) {
  return (
    <div className="sh-page-template sh-editor-template">
      <AppSidebar items={[{ label: '项目概览' }, { label: '创作流程' }, { label: '项目素材' }]} activeItem="创作流程" />
      <div className="sh-editor-template__main">
        <header className="sh-editor-topbar"><div><span>云上来信</span><i>/</i><strong>{title}</strong></div><div><span className="sh-status-dot" />已保存 <Button size="small">预览作品</Button></div></header>
        <nav className="sh-stepper" aria-label="创作步骤">{steps.map((step, index) => <div key={step} className={`sh-stepper__step ${index + 1 === activeStep ? 'is-active' : ''} ${index + 1 < activeStep ? 'is-complete' : ''}`}><span>{index + 1 < activeStep ? '✓' : `0${index + 1}`}</span>{step}</div>)}</nav>
        <div className="sh-editor-heading"><div><span>STEP 0{activeStep} · STORYBOARD</span><h1>{title}</h1></div><Button variant="primary" size="small">＋ 添加分镜</Button></div>
        <div className="sh-editor-workspace"><main className="sh-editor-canvas">{children}</main><aside className="sh-editor-inspector">{inspector ?? <><span>镜头属性</span><strong>场景与画面</strong><p>选中一个分镜后，在这里调整画面内容与创作提示。</p><div className="sh-inspector-skeleton"><i /><i /><i /></div><Button variant="soft" size="small">生成画面</Button></>}</aside></div>
      </div>
    </div>
  );
}
