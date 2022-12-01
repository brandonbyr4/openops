import Head from "next/head"
import useSWR from "swr"
import SettingsCard from "../components/cards/settings-card"
import google_analytics_logo from "../public/images/google_analytics_logo.png"
import paypal_logo from "../public/images/paypal_logo.png"
import stripe_logo from "../public/images/stripe_logo.png"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Settings() {
    const { data, error } = useSWR('/api/getsettings', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const settings = JSON.parse(data).settings

    const handleConfiguration = () => {
        alert("Coming soon!")
    }

    return (
        <div>
            <Head>
                <title>OpenOps | Settings</title>
                <meta name="description" content="Bring Google Analytics, PayPal, Stripe, and more into one UI." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto py-14">
                        <div className="flex justify-between items-center gap-4">
                            <h1 className="text-3xl text-gray-900">
                                Settings
                            </h1>
                        </div>
                        <ul className="flex-1 grid grid-cols-4 gap-x-6 gap-y-12 mt-8">
                            <SettingsCard src={google_analytics_logo} imageWidth="w-8" title="Google Analytics" description="Traffic analytics and user demographics" onClick={() => handleConfiguration()} />
                            <SettingsCard src={paypal_logo} imageWidth="w-24" title="PayPal" description="Data and analytics for PayPal transactions" onClick={() => handleConfiguration()} />
                            <SettingsCard src={stripe_logo} imageWidth="w-16" title="Stripe" description="Data and analytics for Stripe transactions" onClick={() => handleConfiguration()} />
                        </ul>
                        {/* {settings.googleAnalyticsAPIKey} */}
                    </div>
                </section>
            </main>
        </div>
    )
}
