/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{html,tsx}'],
  theme: {
    extends: {
      colors: {
        primary: '#14213d',
        secondary: '#fca311',
        accent: '#e5e5e5',
        neutral: '#2a323c',
        'base-100': '#1d232a',
        info: '#3abff8',
        success: '#36d399',
        warning: '#fbbd23',
        error: '#f87272'
      }
    }
  },
  plugins: [daisyui]
};
