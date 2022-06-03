import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    font-family: ${props => props.theme.fontFamily.primary};
    margin: 0;
    padding: 0;
    background-image: -webkit-linear-gradient(180deg, ${props => props.theme.colors.dark.background[2]}, ${props => props.theme.colors.dark.background[1]});
  }
  .global-container {
    margin: 0 auto;
    max-width: 1346px;
    padding: 0 20px;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`

export default GlobalStyle;