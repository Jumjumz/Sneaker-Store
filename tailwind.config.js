/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coral': {
            900: '#CB4E47',
            800: '#FF8976',
            700: '#FFCBA4'
        },
        'blk': '#190204',
        'gry': {
          900: '#1E1E1E',
          800: '#DFE0E0',
          700: '#E0E6F3',
          600: '#83868D',
          500: '#D9D9D9',
          400: '#F2F2F2',
        },
        'blu': {
          900: '#2C4D90',
          800: '#3282E0',
          700: '#384862',
          600: '#5E79A4',
        },
        'gld': {
          900: '#B47E38',
          800: '#C6AE8B',
        },
        'drkred': '#73132D',
        'grn': '#8E9792',
      },
      fontFamily: {
        'roboto': ['"Roboto"'],
        'jost': ['"Jost"'],
        'inter-light': ['"Inter-Light"'],
      },

      backgroundImage: {
        'about-model': 'url("src/assets/Products/model-about-us.jpg")',
      },

      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },

      gridTemplateRows: {
        '14': 'repeat(14, minmax(0, 1fr))',
      },

      gridColumnStart: {
        '13' : '13',
        '14' : '14',
      },
    },
  },
  plugins: [],
}

