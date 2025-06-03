// vite.config.js
import { defineConfig } from "file:///C:/Users/tyrel/OneDrive/Desktop/meet/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/tyrel/OneDrive/Desktop/meet/node_modules/@vitejs/plugin-react-swc/index.mjs";
import { VitePWA } from "file:///C:/Users/tyrel/OneDrive/Desktop/meet/node_modules/vite-plugin-pwa/dist/index.js";
var vite_config_default = defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      manifest: {
        "short_name": "React App",
        "name": "Create React App Sample",
        "icons": [
          {
            "src": "favicon.ico",
            "sizes": "48x48",
            "type": "image/x-icon",
            "purpose": "maskable"
          },
          {
            "src": "meet-app-144.png",
            "type": "image/png",
            "sizes": "144x144",
            "purpose": "any"
          },
          {
            "src": "meet-app-192.png",
            "type": "image/png",
            "sizes": "192x192",
            "purpose": "maskable"
          },
          {
            "src": "meet-app-512.png",
            "type": "image/png",
            "sizes": "512x512",
            "purpose": "maskable"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      },
      srcDir: "src",
      // Update if your service-worker.js is elsewhere
      filename: "service-worker.js",
      // Ensure it's accessible in production
      registerType: "autoUpdate",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /\/.*\.png$/,
            // Example pattern for caching png images
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "images",
              expiration: {
                maxEntries: 50
              }
            }
          }
        ]
      }
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx0eXJlbFxcXFxPbmVEcml2ZVxcXFxEZXNrdG9wXFxcXG1lZXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHR5cmVsXFxcXE9uZURyaXZlXFxcXERlc2t0b3BcXFxcbWVldFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvdHlyZWwvT25lRHJpdmUvRGVza3RvcC9tZWV0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdC1zd2MnXG5pbXBvcnQgeyBWaXRlUFdBIH0gZnJvbSAndml0ZS1wbHVnaW4tcHdhJztcblxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuIGJhc2U6ICcvJyxcbiBwbHVnaW5zOiBbXG4gICByZWFjdCgpLFxuICAgVml0ZVBXQSh7XG4gICAgIG1hbmlmZXN0OiB7XG4gICAgICAgXCJzaG9ydF9uYW1lXCI6IFwiUmVhY3QgQXBwXCIsXG4gICAgICAgXCJuYW1lXCI6IFwiQ3JlYXRlIFJlYWN0IEFwcCBTYW1wbGVcIixcbiAgICAgICBcImljb25zXCI6IFtcbiAgICAgICAgICAge1xuICAgICAgICAgICBcInNyY1wiOiBcImZhdmljb24uaWNvXCIsXG4gICAgICAgICAgIFwic2l6ZXNcIjogXCI0OHg0OFwiLFxuICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS94LWljb25cIixcbiAgICAgICAgICAgXCJwdXJwb3NlXCI6IFwibWFza2FibGVcIlxuICAgICAgICAgICB9LFxuICAgICAgICAgICB7XG4gICAgICAgICAgIFwic3JjXCI6IFwibWVldC1hcHAtMTQ0LnBuZ1wiLFxuICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZS9wbmdcIixcbiAgICAgICAgICAgXCJzaXplc1wiOiBcIjE0NHgxNDRcIixcbiAgICAgICAgICAgXCJwdXJwb3NlXCI6IFwiYW55XCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICBcInNyY1wiOiBcIm1lZXQtYXBwLTE5Mi5wbmdcIixcbiAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgIFwic2l6ZXNcIjogXCIxOTJ4MTkyXCIsXG4gICAgICAgICAgIFwicHVycG9zZVwiOiBcIm1hc2thYmxlXCJcbiAgICAgICAgICAgfSxcbiAgICAgICAgICAge1xuICAgICAgICAgICBcInNyY1wiOiBcIm1lZXQtYXBwLTUxMi5wbmdcIixcbiAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2UvcG5nXCIsXG4gICAgICAgICAgIFwic2l6ZXNcIjogXCI1MTJ4NTEyXCIsXG4gICAgICAgICAgIFwicHVycG9zZVwiOiBcIm1hc2thYmxlXCJcbiAgICAgICAgICAgfVxuICAgICAgIF0sXG4gICAgICAgXCJzdGFydF91cmxcIjogXCIuXCIsXG4gICAgICAgXCJkaXNwbGF5XCI6IFwic3RhbmRhbG9uZVwiLFxuICAgICAgIFwidGhlbWVfY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgICAgXCJiYWNrZ3JvdW5kX2NvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgIH0sXG4gICAgIHNyY0RpcjogJ3NyYycsIC8vIFVwZGF0ZSBpZiB5b3VyIHNlcnZpY2Utd29ya2VyLmpzIGlzIGVsc2V3aGVyZVxuICAgICBmaWxlbmFtZTogJ3NlcnZpY2Utd29ya2VyLmpzJywgLy8gRW5zdXJlIGl0J3MgYWNjZXNzaWJsZSBpbiBwcm9kdWN0aW9uXG4gICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICB3b3JrYm94OiB7XG4gICAgICAgcnVudGltZUNhY2hpbmc6IFtcbiAgICAgICAgIHtcbiAgICAgICAgICAgdXJsUGF0dGVybjogL1xcLy4qXFwucG5nJC8sIC8vIEV4YW1wbGUgcGF0dGVybiBmb3IgY2FjaGluZyBwbmcgaW1hZ2VzXG4gICAgICAgICAgIGhhbmRsZXI6ICdTdGFsZVdoaWxlUmV2YWxpZGF0ZScsXG4gICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICBjYWNoZU5hbWU6ICdpbWFnZXMnLFxuICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcbiAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDUwLFxuICAgICAgICAgICAgIH0sXG4gICAgICAgICAgIH0sXG4gICAgICAgICB9LFxuICAgICAgIF0sXG4gICAgIH0sXG4gICB9KV0sXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxvQkFBb0I7QUFDdlUsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUd4QixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUixjQUFjO0FBQUEsUUFDZCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDTDtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsU0FBUztBQUFBLFlBQ1QsUUFBUTtBQUFBLFlBQ1IsV0FBVztBQUFBLFVBQ1g7QUFBQSxVQUNBO0FBQUEsWUFDQSxPQUFPO0FBQUEsWUFDUCxRQUFRO0FBQUEsWUFDUixTQUFTO0FBQUEsWUFDVCxXQUFXO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxZQUNBLE9BQU87QUFBQSxZQUNQLFFBQVE7QUFBQSxZQUNSLFNBQVM7QUFBQSxZQUNULFdBQVc7QUFBQSxVQUNYO0FBQUEsVUFDQTtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsUUFBUTtBQUFBLFlBQ1IsU0FBUztBQUFBLFlBQ1QsV0FBVztBQUFBLFVBQ1g7QUFBQSxRQUNKO0FBQUEsUUFDQSxhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxlQUFlO0FBQUEsUUFDZixvQkFBb0I7QUFBQSxNQUN0QjtBQUFBLE1BQ0EsUUFBUTtBQUFBO0FBQUEsTUFDUixVQUFVO0FBQUE7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNQLGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxZQUNFLFlBQVk7QUFBQTtBQUFBLFlBQ1osU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxjQUNkO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQUM7QUFDTCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
