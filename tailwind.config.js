module.exports = {
  theme: {
    extend: {
      padding: {
        buttonx: '1.75rem',
        buttont: '0.5rem',
        buttonb: '0.55rem',

        inputt: '0.75rem',
        inputb: '0.8rem',

        // fixes slight offset in inline components
        opticalfix: '0.125rem',
      },
      borderRadius: {
        button: '7px',
        input: '7px',
      },
      colors: {
        primary: '#fbc126',
        secondary: {
          lighter: '#fb7264',
          default: '#fa6151',
          darker: '#f9503e',
        },
        tertiary: {
          lighter: '#005b4f',
          default: '#00473e',
          darker: '#00332d',
        },
        accent: '#ffa8ba',
        neutral: '#707070',
      },
      fontFamily: {
        ui: ['"HK Grotesk"', '"Segoe UI"', 'Helvetica', 'sans-serif'],
        serif: [
          'Gelasio',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
      },
    },
  },
}
