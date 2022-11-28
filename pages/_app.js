import "../styles/globals.css"
import DashboardLayout from "../components/layouts/dashboard-layout"

function MyApp({ Component, pageProps }) {
    return <DashboardLayout body={<Component {...pageProps} />} />
}

export default MyApp
