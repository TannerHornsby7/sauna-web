/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {'olivine': { DEFAULT: '#A0BF7B', 100: '#212b15', 200: '#415529', 300: '#62803e', 400: '#83ab52', 500: '#a0bf7b', 600: '#b4cd96', 700: '#c7d9b1', 800: '#dae6cb', 900: '#ecf2e5' }, 'ebony': { DEFAULT: '#484C40', 100: '#0e0f0d', 200: '#1c1e19', 300: '#2b2d26', 400: '#393c32', 500: '#484c40', 600: '#6d7461', 700: '#939985', 800: '#b7bbae', 900: '#dbddd6' }, 'ebony': { DEFAULT: '#595F4E', 100: '#121310', 200: '#24261f', 300: '#36392f', 400: '#474c3e', 500: '#595f4e', 600: '#7c846c', 700: '#9da490', 800: '#bec2b5', 900: '#dee1da' }, 'davy_gray': { DEFAULT: '#5C5D5F', 100: '#121313', 200: '#252526', 300: '#37383a', 400: '#4a4b4d', 500: '#5c5d5f', 600: '#7c7e81', 700: '#9d9ea1', 800: '#bdbec0', 900: '#dedfe0' }, 'eerie_black': { DEFAULT: '#201E1A', 100: '#060605', 200: '#0c0c0a', 300: '#13110f', 400: '#191714', 500: '#201e1a', 600: '#514c42', 700: '#837b6b', 800: '#ada79b', 900: '#d6d3cd' } },
      },
    },
    fontFamily: {
      'body': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'system-ui',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji'
      ]
    }
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

