@@ .. @@
 import { defineConfig } from 'vite';
 import react from '@vitejs/plugin-react';

 // https://vitejs.dev/config/
 export default defineConfig({
   plugins: [react()],
   optimizeDeps: {
     exclude: ['lucide-react'],
   },
+  server: {
+    headers: {
+      'X-Content-Type-Options': 'nosniff',
+      'X-Frame-Options': 'DENY',
+      'X-XSS-Protection': '1; mode=block',
+      'Referrer-Policy': 'strict-origin-when-cross-origin',
+      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()'
+    }
+  },
+  build: {
+    rollupOptions: {
+      output: {
+        manualChunks: {
+          vendor: ['react', 'react-dom'],
+          icons: ['lucide-react']
+        }
+      }
+    },
+    sourcemap: false,
+    minify: 'terser',
+    terserOptions: {
+      compress: {
+        drop_console: true,
+        drop_debugger: true
+      }
+    }
+  }
 });