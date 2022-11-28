import Head from "next/head"
import Image from "next/image"
import ButtonMainAction from "../components/buttons/button-main-action"
import google_analytics_logo from "../public/images/google_analytics_logo.png"
import paypal_logo from "../public/images/paypal_logo.png"
import stripe_logo from "../public/images/stripe_logo.png"

export default function Settings() {
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
                        <ul className="flex-1 grid grid-cols-5 gap-x-6 gap-y-12 mt-8">
                            <li className="flex flex-col justify-between p-8 border border-gray-900 rounded">
                                <div className="w-8 mb-4">
                                    <Image src={google_analytics_logo} alt="Google Analytics logo" />
                                </div>
                                <div>
                                    <p className="text-xl text-gray-900 mb-2">
                                        Google Analytics
                                    </p>
                                    <p className="text-gray-900 mb-6">
                                        Traffic analytics and user demographics
                                    </p>
                                    <div className="flex justify-center">
                                        <ButtonMainAction text="Configure" onClick={() => handleConfiguration()} />
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col justify-between p-8 border border-gray-900 rounded">
                                <div className="w-24 mb-4">
                                    <Image src={paypal_logo} alt="Google Analytics logo" />
                                </div>
                                <div>
                                    <p className="text-xl text-gray-900 mb-2">
                                        PayPal
                                    </p>
                                    <p className="text-gray-900 mb-6">
                                        Data and analytics for PayPal transactions
                                    </p>
                                    <div className="flex justify-center">
                                        <ButtonMainAction text="Configure" onClick={() => handleConfiguration()} />
                                    </div>
                                </div>
                            </li>
                            <li className="flex flex-col justify-between p-8 border border-gray-900 rounded">
                                <div className="w-16 mb-4">
                                    <Image src={stripe_logo} alt="Google Analytics logo" />
                                </div>
                                <div>
                                    <p className="text-xl text-gray-900 mb-2">
                                        Stripe
                                    </p>
                                    <p className="text-gray-900 mb-6">
                                        Data and analytics for Stripe transactions
                                    </p>
                                    <div className="flex justify-center">
                                        <ButtonMainAction text="Configure" onClick={() => handleConfiguration()} />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}
