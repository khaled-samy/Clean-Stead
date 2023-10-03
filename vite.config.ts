import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src', 'components'),
      'pages': path.resolve(__dirname, 'src', 'pages'),
      'validations': path.resolve(__dirname, 'src', 'validation'),
      'auth': path.resolve(__dirname, 'src', 'auth'),
      'assets': path.resolve(__dirname, 'src', 'assets'),
    },
  },
});