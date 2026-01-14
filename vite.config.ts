import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@data": path.resolve(__dirname, "src/data"),
      "@stores": path.resolve(__dirname, "src/stores"),
      "@models": path.resolve(__dirname, "src/models"),
      "@templates": path.resolve(__dirname, "src/templates"),
      "@components": path.resolve(__dirname, "src/components")
    }
  }
});
