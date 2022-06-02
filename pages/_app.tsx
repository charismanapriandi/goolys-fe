import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/styled'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
