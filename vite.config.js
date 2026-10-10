import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'

// Builds every HTML page, not just index.html
const page = (name) => fileURLToPath(new URL(`./${name}.html`, import.meta.url))

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: page('index'),
        about: page('about'),
        admin: page('admin'),
        challenges: page('challenges'),
        chat: page('chat'),
        community: page('community'),
        dashboard: page('dashboard'),
        entertainment: page('entertainment'),
        feedback: page('feedback'),
        homefeed: page('homefeed'),
        learning: page('learning'),
        login: page('login'),
        mood: page('mood'),
        notifications: page('notifications'),
        profile: page('profile'),
        register: page('register'),
        talent: page('talent'),
      },
    },
  },
})
