/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{html,tsx}'],
  daisyui: {
    themes: ['light']
  },
  plugins: [daisyui]
};
