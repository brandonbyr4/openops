import Head from "next/head"
import useSWR from "swr"
import ButtonMainAction from "../components/buttons/button-main-action"
import ButtonMainLink from "../components/buttons/button-main-link"

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {
    const { data, error } = useSWR('/api/getsettings', fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const settings = JSON.parse(data).settings

    const handleAlert = () => {
        alert("Coming soon!")
    }

    return (
        <div>
            <Head>
                <title>OpenOps | Dashboard</title>
                <meta name="description" content="Bring Google Analytics, PayPal, Stripe, and more into one UI." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                {settings.googleAnalyticsAPIKey || settings.paypalAPIKey || settings.stripeAPIKey ? <div>
                    <section className="px-3 bg-white">
                        <div className="max-w-screen-xl mx-auto py-14">
                            <div className="flex justify-between items-center gap-4">
                                <h1 className="text-3xl text-gray-900">
                                    Welcome to OpenOps
                                </h1>
                                <ul className="flex items-center gap-4">
                                    <li>
                                        <ButtonMainAction text="Customize" onClick={() => handleAlert()} />
                                    </li>
                                    <li>
                                        <ButtonMainLink text="Add Items" href="/settings" />
                                    </li>
                                </ul>
                            </div>
                            <ul className="space-y-4 mt-8">
                                <li className="h-60 p-10 bg-gray-100 rounded shadow">
                                    dashboard card
                                </li>
                                <li className="h-60 p-10 bg-gray-100 rounded shadow">
                                    dashboard card
                                </li>
                            </ul>
                        </div>
                    </section>
                </div> : <section className="px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto flex flex-col p-10 space-y-4 border border-gray-900 rounded">
                        <h2 className="text-3xl font-gray-900">
                            No integrations found
                        </h2>
                        <ul className="grid md:grid-cols-2 gap-8">
                            <li>
                                <p className="md:text-xl text-gray-900">
                                    Configure an integration to start viewing data.
                                </p>
                            </li>
                            <li className="flex flex-col justify-between">
                                <div className="invisible" />
                                <div className="flex md:justify-end">
                                    <ButtonMainLink text="Setup" href="/settings" />
                                </div>
                            </li>
                        </ul>
                    </div>   
                </section>}
            </main>
        </div>
    )
}
