# 柔雾霞光设计系统

「柔雾霞光」是一套可换色、可复用的前端设计基础。它包含设计令牌、CSS 主题、React 组件和可运行示例。

## 预览

```bash
npm install
npm run dev
```

也可以使用 Bun：

```bash
bun install
bun run dev
```

打开 Vite 输出的本地地址即可预览，右上角可以切换「柔雾霞光」和「清风海盐」主题。

## 在 React 项目中使用

```tsx
import { Button, Card, ThemeProvider } from 'soft-haze-design-system';
import 'soft-haze-design-system/styles.css';

function App() {
  return (
    <ThemeProvider defaultTheme="soft-haze">
      <Card>
        <h2>欢迎回来</h2>
        <Button variant="primary">开始创作</Button>
      </Card>
    </ThemeProvider>
  );
}
```

当前仓库以源码形式交付。新项目可以通过工作区依赖、Git 依赖或发布到私有 npm registry 引入。发布前请先设置包版本与 registry。

## 目录

- `design/`：网页视觉方向、布局节奏与页面设计规范。
- `tokens/`：跨主题的设计令牌和主题 CSS。
- `src/`：React 组件、主题 Provider 和样式入口。
- `src/patterns/`：可复用页面区块，如站点导航、应用侧栏、页面标题和筛选栏。
- `src/templates/`：首页、工作台、编辑器三类页面骨架。
- `docs/`：快速接入、换肤和组件说明。
- `examples/demo/`：令牌、组件与页面模板预览站点。
- `examples/consumer-app/`：从包入口接入设计系统的独立项目示例。
`.impeccable/` 是本地视觉草稿目录，已排除在 Git 提交之外；页面规范和可复用示例会在 `design/` 与 `examples/` 中持续维护。

`public/assets/reference/` 中的参考素材不在本项目许可范围内，默认不会提交或随包发布。

## 技术要求

- React 18 或更高版本
- TypeScript 5 或更高版本
- CSS 自定义属性

主题以 `data-theme` 属性选择。组件只读取语义令牌，因此切换主题无需改组件代码。

## 许可

代码、令牌和文档以 MIT License 提供。参考素材不包含在此许可中。
