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
        section: '7px',
        card: '24px',
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
        print: '#121212',
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
      maxWidth: {
        '3/4': '75%',
        '1/2': '50%',
        '1/4': '25%',
      },
      maxHeight: {
        '2/3': '66.6666666%',
      },
      width: {
        logo: '16rem',
      },
      height: {
        '2/3': '66.6666666%',
        '3/4': '75%',
      },
      fontSize: {
        hero: '5rem',
        sectionHeader: '3rem',
        smallSection: '2.5rem',
      },
      zIndex: {
        'neg-1': '-1',
      },
    },
  },
}
