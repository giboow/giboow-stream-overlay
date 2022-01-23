import '../styles/globals.css'
import {TmiProvider} from "../context/tmi";

function MyApp({Component, pageProps}) {
    return (
        <TmiProvider>
            <Component {...pageProps} />
        </TmiProvider>
    )
}

export default MyApp
