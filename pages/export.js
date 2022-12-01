import Head from "next/head"
import ButtonMainAction from "../components/buttons/button-main-action"

export default function Settings() {
    const handleAlert = () => {
        alert("Coming soon!")
    }
    
    return (
        <div>
            <Head>
                <title>OpenOps | Export</title>
                <meta name="description" content="Bring Google Analytics, PayPal, Stripe, and more into one UI." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto py-14">
                        <div className="flex justify-between items-center gap-4">
                            <h1 className="text-3xl text-gray-900">
                                Export
                            </h1>
                        </div>
                        <div className="flex flex-col mt-8 p-10 space-y-4 border border-gray-900 rounded">
                            <h2 className="text-3xl font-gray-900">
                                Export configuration
                            </h2>
                            <ul className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
                                <li>
                                    <p className="text-xl text-gray-900">
                                        Google Analytics
                                    </p>
                                    <div>
                                        <input id="traffic" type="checkbox" className="mr-2" />
                                        <label htmlFor="traffic">
                                            Traffic
                                        </label>
                                    </div>
                                    <div>
                                        <input id="engagement" type="checkbox" className="mr-2" />
                                        <label htmlFor="engagement">
                                            Engagement
                                        </label>
                                    </div>
                                    <div>
                                        <input id="demographics" type="checkbox" className="mr-2" />
                                        <label htmlFor="demographics">
                                            Demographics
                                        </label>
                                    </div>
                                    <div>
                                        <input id="devices" type="checkbox" className="mr-2" />
                                        <label htmlFor="devices">
                                            Devices
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-xl text-gray-900">
                                        PayPal
                                    </p>
                                    <div>
                                        <input id="orders-paypal" type="checkbox" className="mr-2" />
                                        <label htmlFor="orders-paypal">
                                            Orders
                                        </label>
                                    </div>
                                    <div>
                                        <input id="subscriptions-paypal" type="checkbox" className="mr-2" />
                                        <label htmlFor="subscriptions-paypal">
                                            Subscriptions
                                        </label>
                                    </div>
                                    <div>
                                        <input id="customers-paypal" type="checkbox" className="mr-2" />
                                        <label htmlFor="customers-paypal">
                                            Customers
                                        </label>
                                    </div>
                                    <div>
                                        <input id="refunds-paypal" type="checkbox" className="mr-2" />
                                        <label htmlFor="refunds-paypal">
                                            Refunds
                                        </label>
                                    </div>
                                </li>
                                <li>
                                    <p className="text-xl text-gray-900">
                                        Stripe
                                    </p>
                                    <div>
                                        <input id="orders-stripe" type="checkbox" className="mr-2" />
                                        <label htmlFor="orders-stripe">
                                            Orders
                                        </label>
                                    </div>
                                    <div>
                                        <input id="subscriptions-stripe" type="checkbox" className="mr-2" />
                                        <label htmlFor="subscriptions-stripe">
                                            Subscriptions
                                        </label>
                                    </div>
                                    <div>
                                        <input id="customers-stripe" type="checkbox" className="mr-2" />
                                        <label htmlFor="customers-stripe">
                                            Customers
                                        </label>
                                    </div>
                                    <div>
                                        <input id="refunds-stripe" type="checkbox" className="mr-2" />
                                        <label htmlFor="refunds-stripe">
                                            Refunds
                                        </label>
                                    </div>
                                </li>
                                <li className="flex flex-col justify-between">
                                    <div className="invisible" />
                                    <div className="flex md:justify-end">
                                        <ButtonMainAction text="Export" onClick={() => handleAlert()} />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
