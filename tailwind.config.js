module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: {
      px: '1px',
      0: '0',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        surface: '#F0F0F0',
        onSurface: '#111213',
        primary: '#008060',
        secondary: '#CCCCCC',
        interactive: '#2E72D2',
        critical: '#2E72D2',
        warning: '#FFC453',
        success: '#008060',
        highlight: '#5BCDDA',
        background: {
          default: '#F6F6F7',
        },
        textOn: '#FFFFFF',
        text: {
          critical: '#D72C0D',
          warning: '#916A00',
          success: '#008060',
          highlight: '#347C84',
        },
      },
    },
  },
  plugins: [],
};
