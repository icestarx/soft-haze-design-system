# 快速开始

## 本地运行预览

需要 Node.js 20.19+ 或 22.12+。

```bash
npm install
npm run dev
```

或使用 Bun：

```bash
bun install
bun run dev
```

Vite 会输出预览地址。预览中可以切换「柔雾霞光」和「清风海盐」，切换结果会记在浏览器本地存储中。

## 在 React 项目里接入

安装发布后的包或通过 Git/工作区依赖引用本仓库，然后在应用入口引入样式：

```tsx
import { Button, Card, HomeTemplate, ThemeProvider } from 'soft-haze-design-system';
import 'soft-haze-design-system/styles.css';

export function App() {
  return (
    <ThemeProvider defaultTheme="soft-haze">
      <HomeTemplate title="让灵感，慢慢变成一部作品。">
        <Card><Button variant="primary">开始创作</Button></Card>
      </HomeTemplate>
    </ThemeProvider>
  );
}
```

将 `defaultTheme` 设为 `sea-breeze` 即可使用清风海盐主题。Provider 在应用内部添加主题作用域，不会直接覆盖宿主页面的根节点样式。

## 本地构建

```bash
npm run check
npm run build
```

构建会生成演示站点、ES module 组件包和 TypeScript 声明文件。

## 验证独立项目接入

`examples/consumer-app/` 是一个独立的 Vite 应用，通过打包后的本地 npm tarball 安装设计系统。这样可以验证 npm 包实际发布的文件内容：

```bash
bun run consumer:pack
cd examples/consumer-app
bun install
bun run build
bun run dev
```

它从包入口导入组件和 CSS，不直接引用设计系统源码，适合检查真实项目的接入方式。
