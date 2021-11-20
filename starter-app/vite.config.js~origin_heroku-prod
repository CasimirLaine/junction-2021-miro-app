const path = require("path");
const { defineConfig } = require("vite");
const mkcert = require("vite-plugin-mkcert").default;
import crossOriginIsolation from 'vite-plugin-cross-origin-isolation'

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, "index.html"),
        app: path.resolve(__dirname, "app.html"),
      },
    },
  },
  configureServer: ({ app }) => {
    app.use(cors({ origin: '*' }));
  },
  server: {
    https: true,
    cors: true,
  },
  plugins: [mkcert(),
    crossOriginIsolation()],
  
});
