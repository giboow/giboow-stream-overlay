import '../styles/globals.css'

import {createGlobalStyle, ThemeProvider} from 'styled-components'
import {TmiProvider} from "../context/tmi.context";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

const theme = {
    colors: {
        primary: '#0070f3',
    },
}

function MyApp({Component, pageProps}) {
    return (
        <>
            <GlobalStyle/>
            <ThemeProvider theme={theme}>
                <TmiProvider>
                    <Component {...pageProps} />
                </TmiProvider>
            </ThemeProvider>
        </>
    )
}

export default MyApp
