# 独立消费项目

此示例通过本地 npm tarball 安装设计系统包，并从公开包入口导入组件、主题元数据与 CSS。它不直接引用 `src/`，用来展示新项目的接入方式。

```bash
cd ../..
bun run consumer:pack
cd examples/consumer-app
bun install
bun run dev
```

从仓库根目录修改设计系统后，重建根包再重装本地依赖，以刷新本地消费项目拿到的 `dist/` 文件：

```bash
cd ../..
bun run consumer:pack
cd examples/consumer-app
bun install --force
bun run dev
```
