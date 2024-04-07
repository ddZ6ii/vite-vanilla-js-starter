import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import pluginPurgeCss from 'vite-plugin-purgecss-updated-v5';

// Define chrome as default browser for the dev server.
const opsys = process.platform;
// windows
if (opsys === 'win32') process.env.BROWSER = 'chrome';
// macOS
if (opsys === 'darwin') process.env.BROWSER = '/Applications/Google Chrome.app';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    emptyOutDir: true,
    outDir: '../dist',
    sourcemap: true,
  },
  plugins: [
    // HTML minification
    ViteMinifyPlugin({
      removeComments: true,
    }),
    // Purge CSS: remove unused CSS class
    pluginPurgeCss({
      content: ['./src/**/*.html'],
      sourceMap: true,
      variables: true,
    }),
  ],
});
