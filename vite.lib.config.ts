import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const entry = fileURLToPath(new URL('./src/library-entry.ts', import.meta.url));

export default defineConfig({
  publicDir: false,
  build: {
    outDir: 'dist/lib',
    emptyOutDir: true,
    lib: {
      entry,
      formats: ['es'],
      fileName: 'soft-haze',
      cssFileName: 'styles',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },
});
