/** @format */
import typography from '@tailwindcss/typography';

export default {
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans', 'system-ui', 'sans-serif'],
        heading: 'Opan Sans ExtraBold',
        logo: 'Waltograph',
      },
      colors: {
        text: {
          primary: '#1A1A1A',
        },
        bg: {
          'white-900': '#fff2f2',
          primary: '#EB6440',
        },
      },
    },
  },
  plugins: [typography],
};
