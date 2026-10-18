# 主题

## 主题工作方式

组件只使用 `--sh-*` 语义 CSS 变量。每个主题 CSS 文件为同一组变量赋值，所以结构、交互状态和组件实现能跨主题共用。

| 主题名 | 显示名称 | CSS 文件 | 气质 |
| --- | --- | --- | --- |
| `soft-haze` | 柔雾霞光 | `tokens/themes/soft-haze.css` | 雾紫为主，桃色与薄荷色点缀 |
| `sea-breeze` | 清风海盐 | `tokens/themes/theme-b.css` | 海盐蓝绿为主，暖沙色点缀 |

## 切换主题

React 项目使用 `ThemeProvider` 与 `useTheme`：

```tsx
const { theme, setTheme } = useTheme();
setTheme(theme === 'soft-haze' ? 'sea-breeze' : 'soft-haze');
```

非 React 页面可以在容器上设置属性：

```html
<main data-theme="sea-breeze">...</main>
```

确保全局引入 `src/styles.css` 或两个主题 CSS 文件。

## 添加主题

在 `tokens/tokens.json` 的 `themes` 下添加一个主题对象，包含 `label`、`color`、`shadow`，并提供组件所使用的语义色。之后运行：

```bash
npm run tokens:build
npm run tokens:check
```

生成步骤会创建对应主题 CSS、主题选择器使用的 TypeScript 联合类型，以及全局 CSS 导入清单。React 的 `ThemeProvider` 和主题预览会自动识别新主题，无需手动编辑主题类型或追加 CSS 导入。

对比度检查覆盖常见正文、品牌操作和状态文字组合，目标为 WCAG AA 的 4.5:1。检查失败时，先调整主题令牌，再重新生成并检查。不要在组件样式中写主题专属色值。
