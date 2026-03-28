import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    visualizer({
      filename: './dist/bundle-analysis.log.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('mobx')) {
              return 'vendor-mobx';
            }

            if (id.includes('firebase')) {
              return 'vendor-firebase';
            }

            if (id.includes('@dnd-kit')) {
              return 'vendor-dnd';
            }

            if (
              /[/\\]node_modules[/\\](react|react-dom|scheduler|react-router)([/\\]|$)/.test(
                id,
              )
            ) {
              return 'vendor-react';
            }

            return 'vendor-others';
          }
        },
      },
    },
  },
});
