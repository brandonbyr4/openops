import Head from "next/head"

export default function Home() {
    return (
        <div>
            <Head>
                <title>OpenOps</title>
                <meta name="description" content="Bring Google Analytics, PayPal, Stripe, and more into one UI." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <section className="px-3 bg-white">
                    <div className="max-w-screen-xl mx-auto pt-20">
                        <h1 className="text-3xl font-semibold text-sky-500">
                            Welcome to OpenOps
                        </h1>
                    </div>
                </section>
                <section className="h-[500px]">
                    <div className="max-w-screen-xl mx-auto py-14">
                        <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                            <li className="p-10 bg-gray-100 rounded shadow">
                                dashboard card
                            </li>
                            <li className="p-10 bg-gray-100 rounded shadow">
                                dashboard card
                            </li>
                            <li className="p-10 bg-gray-100 rounded shadow">
                                dashboard card
                            </li>
                            <li className="p-10 bg-gray-100 rounded shadow">
                                dashboard card
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
}
