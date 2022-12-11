export default function InputModal (props) {
    return <div>
        <div className="absolute top-0 h-full w-full bg-gray-900/50" onClick={() => props.closeModal()} />
        <div className="pt-8 px-8 pb-10 absolute w-[calc(100%-1.5rem)] max-w-xl h-fit mx-auto mt-40 right-3 left-3 top-0 bottom-0 bg-white shadow rounded">
            <p className="text-2xl font-semibold text-gray-900 mb-6">
                Setup {props.title}
            </p>
            <div className="space-y-2">
                <label htmlFor="apiKey">
                    API Key
                </label>
                <input id="apiKey" className="p-3 w-full bg-gray-100 text-gray-900" type="text" />
            </div>
        </div>
    </div>
}