# 组件

## Button

```tsx
<Button variant="primary" size="medium">保存</Button>
```

- `variant`：`primary`、`soft`、`quiet`、`secondary`（默认）。
- `size`：`small`、`medium`（默认）、`large`。
- `loading`：显示加载指示器并自动禁用按钮。
- 原生 `button` 属性（如 `type`、`disabled`、`onClick`）会透传。

```tsx
<Button variant="primary" loading>正在保存</Button>
<Button disabled>暂不可用</Button>
```

## Card

```tsx
<Card>内容</Card>
<Card padded={false}>自定义内边距</Card>
```

## Badge

```tsx
<Badge>处理中</Badge>
<Badge tone="success">已完成</Badge>
```

`tone` 支持 `brand`（默认）、`warm`、`success`。

## TextField

```tsx
<TextField label="项目名称" placeholder="输入名称" hint="最多 32 个字符" />
```

组件自动关联 label 和 input，并支持原生输入框属性。`hint` 和 `error` 会自动与输入框关联，错误状态会设置 `aria-invalid`。

```tsx
<TextField label="邮箱地址" type="email" error="请输入有效的邮箱地址" />
```

## Alert

```tsx
<Alert tone="success" title="保存成功">更改已同步。</Alert>
<Alert tone="danger" title="无法保存">请检查网络后重试。</Alert>
```

`tone` 支持 `info`（默认）、`success`、`warning`、`danger`。警告和错误默认使用 `role="alert"`，信息和成功消息使用 `role="status"`；也可以通过原生 `role` 属性覆盖。

## EmptyState

```tsx
<EmptyState
  icon="✦"
  title="还没有项目"
  description="创建一个项目，开始收集灵感。"
  action={<Button variant="primary">创建项目</Button>}
/>
```

空状态的图标和操作都是可选的，组件提供内容结构与视觉样式。

## ThemeProvider

```tsx
<ThemeProvider defaultTheme="soft-haze">...</ThemeProvider>
```

通过 `useTheme()` 读取或更新主题。主题默认保存在 `localStorage` 的 `sh-theme` 键中；可以用 `storageKey` 自定义。

页面组合模板（首页、工作台、编辑器）见 [页面模式说明](./page-patterns.md)。
