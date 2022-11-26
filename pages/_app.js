import "../styles/globals.css"

import Header from "../components/navigation/header.js"
import Footer from "../components/navigation/footer.js"

function MyApp({ Component, pageProps }) {
    return <div className="relative min-h-screen flex flex-col justify-between bg-white">
        <Header />
        <Component {...pageProps} />
        <Footer />
    </div>
}

export default MyApp
