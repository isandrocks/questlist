/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: '1081px' // Change lg breakpoint to 1081px
      }
    }
  },
  plugins: [forms]
}
