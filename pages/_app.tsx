import type { AppProps } from 'next/app'
import { NextUIProvider } from '@nextui-org/react'
import '../styles/globals.css'
import { darktheme } from '../themes/'

function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <NextUIProvider theme={darktheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
