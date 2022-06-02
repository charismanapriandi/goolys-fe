import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: ${props => props.theme.colors.background.dark};
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