import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Chat-bot/', // Ensure this matches your repo name
  server: {
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin"
    },
  },
  build: {
    outDir: 'dist', // Match the `deploy` script in `package.json`
    assetsDir: 'assets',
  },
});
