module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      sans: '-apple-system, BlinkMacSystemFont, SF Pro Text, Segoe UI, Roboto, Helvetica Neue, sans-serif',
      display:
        '-apple-system, BlinkMacSystemFont, SF Pro Display, Segoe UI, Roboto, Helvetica Neue, sans-serif',
    },
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
        critical: '#D82C0D',
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
        surface: {
          critical: {
            default: '#FED3D1',
          },
        },
        icon: {
          default: '#5C5F62',
          subdued: '#8C9196',
          hovered: '#1A1C1D',
          pressed: '#44474A',
          disabled: '#BABEC3',
          critical: '#D72C0D',
          warning: '#B98900',
          success: '#007F5F',
          highlight: '#00A0AC',
        },
        neutral: {
          darker: '#222528',
          dark: '#2C2F33',
          default: '#414448',
          light: '#8C9196',
          lighter: '#BABEC3',
        },
        border: {
          critical: {
            default: '#FD5749',
            subdue: '#E0B3B2',
            disabled: '#FFA7A3',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
