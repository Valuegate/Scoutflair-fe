/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "120px",
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    }
  },
  fontFamily: {
    'brfirma': ['BRFirma', 'sans-serif'],
  },
  plugins: []
  // ...
}