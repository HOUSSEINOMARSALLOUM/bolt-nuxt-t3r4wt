import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2B3C5A',
        'brand-orange': '#FF6B35',
        'brand-green': '#3CAD87'
      }
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ]
} satisfies Config