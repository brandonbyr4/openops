import Head from "next/head"
import ButtonMainAction from "../components/buttons/button-main-action"
import ButtonMainLink from "../components/buttons/button-main-link"

export default function Home() {
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
            </main>
        </div>
    )
}
