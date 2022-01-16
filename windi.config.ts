import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#202020',
          dark: '#1b1b1b',
          darker: '#101010',
        },
        accent: {
          DEFAULT: '#5b0770',
          light: '#A20CC7',
        },
      },
    },
  },
})
