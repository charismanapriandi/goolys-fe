import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  fontFamily: {
    arial: 'Arial',
    poppins: "'Poppins', sans-serif",
  },
  colors: {
    black: {
      opacity: {
        1: 'rgba(0, 0, 0, 1)',
      }
    },
    white: {
      opacity: {
        1: 'rgba(255, 255, 255, 1)',
        .87: 'rgba(255, 255, 255, .87)',
        .69: 'rgba(255, 255, 255, .69)',
        .2: 'rgba(255, 255, 255, .2)',
      }
    },
    background: {
      dark: '#000000',
    }
  },
};

export { theme };
