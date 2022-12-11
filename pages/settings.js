import Head from "next/head"
import useSWR from "swr"
import { useState } from "react"
import SettingsCard from "../components/cards/settings-card"
import google_analytics_logo from "../public/images/google_analytics_logo.png"
import paypal_logo from "../public/images/paypal_logo.png"
import stripe_logo from "../public/images/stripe_logo.png"
import InputModal from "../components/modals/input-modal"


const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Settings() {
    const { data, error } = useSWR('/api/getsettings', fetcher);
    const [currentConfig, setCurrentConfig] = useState(null)

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const settings = JSON.parse(data).settings

    return (
        <div>
            <Head>
                <title>OpenOps | Settings</title>
                <meta name="description" content="Bring Google Analytics, PayPal, Stripe, and more into one UI." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {currentConfig ? <InputModal
                    closeModal={() => setCurrentConfig(null)}
                    title={currentConfig}
                /> : <div className="hidden" />}
                <section className="px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto py-14">
                        <div className="flex justify-between items-center gap-4">
                            <h1 className="text-3xl text-gray-900">
                                Settings
                            </h1>
                        </div>
                        <ul className="flex-1 grid lg:grid-cols-4 md:grid-cols-2 md:gap-x-6 md:gap-y-12 gap-y-6 mt-8">
                            <SettingsCard src={google_analytics_logo} imageWidth="w-8" title="Google Analytics" description="Traffic analytics and user demographics" onClick={() => setCurrentConfig("Google Analytics")} />
                            <SettingsCard src={paypal_logo} imageWidth="w-24" title="PayPal" description="Data and analytics for PayPal transactions" onClick={() => setCurrentConfig("PayPal")} />
                            <SettingsCard src={stripe_logo} imageWidth="w-16" title="Stripe" description="Data and analytics for Stripe transactions" onClick={() => setCurrentConfig("Stripe")} />
                        </ul>
                        {/* {settings.googleAnalyticsAPIKey} */}
                    </div>
                </section>
            </main>
        </div>
    )
}
