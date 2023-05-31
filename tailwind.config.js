/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        lightTheme: {
          primary: '#F8860D',
          secondary: '#6E0B75',
          accent: '#007EBD',
          neutral: '#1F2937',
          'base-100': '#FFFFFF',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
        darkTheme: {
          primary: '#F28C18',
          secondary: '#6D3A9C',
          accent: '#51A800',
          neutral: '#1B1D1D',
          'base-100': '#212121',
          info: '#2563EB',
          success: '#16A34A',
          warning: '#D97706',
          error: '#DC2626',
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-animated'),
    require('@tailwindcss/typography'),
  ],
}
