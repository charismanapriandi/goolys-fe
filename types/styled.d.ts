// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    fontFamily: {
      arial: string;
      poppins: string;
    }
    colors: {
      black: {
        opacity: {
          1: string;
        }
      }
      white: {
        opacity: {
          1: string,
          .87: string,
          .69: string,
          .2: string,
        }
      }
      background: {
        dark: string;
      };
    };
  }
}