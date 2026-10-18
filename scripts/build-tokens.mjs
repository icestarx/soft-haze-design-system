import { readFile, readdir, unlink, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const tokens = JSON.parse(await readFile(resolve(root, 'tokens/tokens.json'), 'utf8'));
const themes = Object.entries(tokens.themes);
if (themes.length === 0) throw new Error('tokens/tokens.json must define at least one theme');

const cssImports = [];
const themeMetadata = [];
const themeDirectory = resolve(root, 'tokens/themes');
const themeFilenames = new Set(themes.map(([themeName]) => `${themeName}.css`));
for (const filename of await readdir(themeDirectory)) {
  if (filename.endsWith('.css') && !themeFilenames.has(filename)) await unlink(resolve(themeDirectory, filename));
}
for (const [index, [themeName, theme]] of themes.entries()) {
  const filename = `${themeName}.css`;
  const selector = index === 0 ? `:root, [data-theme="${themeName}"]` : `[data-theme="${themeName}"]`;
  const declarations = [];
  for (const [name, value] of Object.entries(theme.color)) declarations.push(`  --sh-${name}: ${value};`);
  for (const [name, value] of Object.entries(tokens.shared.status)) declarations.push(`  --sh-${name}: ${value};`);
  for (const [name, value] of Object.entries(theme.shadow)) declarations.push(`  --sh-shadow-${name}: ${value};`);
  for (const [name, value] of Object.entries(tokens.shared.radius)) declarations.push(`  --sh-radius-${name}: ${value};`);
  for (const [name, value] of Object.entries(tokens.shared.space)) declarations.push(`  --sh-space-${name}: ${value};`);
  for (const [name, value] of Object.entries(tokens.shared.font)) declarations.push(`  --sh-font-${name}: ${value};`);
  const css = `${selector} {\n  color-scheme: light;\n${declarations.join('\n')}\n}\n`;
  await writeFile(resolve(themeDirectory, filename), css);
  cssImports.push(`@import "../tokens/themes/${filename}";`);
  themeMetadata.push({ id: themeName, label: theme.label });
}

await writeFile(resolve(root, 'src/themes.generated.css'), `${cssImports.join('\n')}\n`);
await writeFile(
  resolve(root, 'src/components/themes.generated.ts'),
  `// Generated from tokens/tokens.json. Do not edit by hand.\nexport const availableThemes = ${JSON.stringify(themeMetadata, null, 2)} as const;\nexport type ThemeName = typeof availableThemes[number]['id'];\n`,
);
