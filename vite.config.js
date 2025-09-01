import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  bace: '/<https://github.com/strannosti/anarbek>/',
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/<repo-name>/', // замените <repo-name> на название вашего репозитория
// });
