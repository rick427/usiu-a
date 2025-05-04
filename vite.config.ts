import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        additionalData: `
          @use "@/styles/_mixins" as *;  
          @use "${path.join(process.cwd(), 'src/styles/_mantine').replace(/\\/g, '/')}" as mantine;
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@/assets": "/src/assets",
      "@/styles": "/src/styles",
      "@/pages": "/src/pages",
      "@/hooks": "/src/hooks",
      "@/services": "/src/services",
      "@/components": "/src/components",
      "@/constants": "/src/constants",
      "@/utils": "/src/utils",
      "@/routes": "/src/routes",
    }
  },
})
