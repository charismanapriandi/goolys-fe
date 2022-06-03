// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: {
      primary: string;
    }
    transition: {
      easeInOut: (duration: number) => string,
    }
    colors: {
      dark: {
        background: {
          1: string;
          2: string;
        };
        font: {
          1: string;
          2: string;
          3: string;
          4: string;
        }
        border: {
          1: string;
          2: string;
        };
      }
    };
  }
}