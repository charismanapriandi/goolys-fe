import type { AppProps } from 'next/app'
import GlobalStyle from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/styled'
import CursorProvider from 'context/cursorContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CursorProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </CursorProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
