import '@styles/custom.css'
import "@styles/animate.css"
import "@styles/LineIcons.2.0.css"
import "@styles/main.css"
import '@styles/output.css'
import "@styles/style.css"
import "@styles/tiny-slider.css"
import "@fonts/Butler_Webfont/stylesheet.css"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
