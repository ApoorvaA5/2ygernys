import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // React plugin
import svgr from 'vite-plugin-svgr';      // SVG-to-React component plugin

export default defineConfig({
  plugins: [react(), svgr()]  // Use both plugins
});

