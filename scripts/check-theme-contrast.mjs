import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const tokens = JSON.parse(await readFile(resolve(root, 'tokens/tokens.json'), 'utf8'));
const checks = [
  ['text-primary', 'canvas'],
  ['text-primary', 'surface'],
  ['text-secondary', 'surface'],
  ['text-muted', 'surface'],
  ['brand-strong', 'surface'],
  ['brand-strong', 'brand-soft'],
  ['success', 'accent-cool-soft'],
  ['warning', 'accent-warm-soft'],
  ['danger', 'danger-soft'],
];
const luminance = (hex) => {
  const rgb = hex.replace('#', '').match(/.{2}/g).map((part) => parseInt(part, 16) / 255);
  const linear = rgb.map((channel) => channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4);
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
};
const ratio = (foreground, background) => {
  const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a);
  return (values[0] + 0.05) / (values[1] + 0.05);
};

let failures = 0;
for (const [themeName, theme] of Object.entries(tokens.themes)) {
  console.log(`\n${theme.label} (${themeName})`);
  for (const [foregroundName, backgroundName] of checks) {
    const foreground = theme.color[foregroundName] ?? tokens.shared.status[foregroundName];
    const background = theme.color[backgroundName];
    if (!foreground || !background) {
      console.error(`  missing token: ${foregroundName} / ${backgroundName}`);
      failures++;
      continue;
    }
    const value = ratio(foreground, background);
    const passes = value >= 4.5;
    console.log(`  ${passes ? 'PASS' : 'FAIL'} ${foregroundName} on ${backgroundName}: ${value.toFixed(2)}:1`);
    if (!passes) failures++;
  }
}

if (failures > 0) {
  console.error(`\nTheme contrast check failed: ${failures} pair(s) below WCAG AA 4.5:1.`);
  process.exitCode = 1;
} else {
  console.log('\nAll checked text pairs meet WCAG AA 4.5:1.');
}
