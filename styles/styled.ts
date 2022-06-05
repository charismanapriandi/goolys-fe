import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  fontFamily: {
    primary: "'Roboto', sans-serif",
  },
  transition: {
    easeInOut: (duration: number) => `all ${duration}s ease-in-out`,
  }, 
  colors: {
    dark: {
      alert: {
        error: {
          text: '#EA4300',
          background: '#EA43001A'
        },
      },
      background: {
        1: '#1C1A18',
        2: '#282524',
      },
      font: {
        1: '#FFFFFF',
        2: '#D5D3D1',
        3: '#A7A29F',
        4: '#56534F',
      },
      border: {
        1: 'rgb(41, 37, 36)',
        2: '#423F3B'
      },
    },
  },
};

export { theme };
