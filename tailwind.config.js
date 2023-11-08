/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ['./index.html', './src/**/*.{html,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#14213d',
          secondary: '#fca311',
          accent: '#e5e5e5',
          neutral: '#2a323c',
          'base-100': '#4b5563',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      }
    ]
  },
  plugins: [daisyui]
};
