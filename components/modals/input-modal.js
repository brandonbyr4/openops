export default function InputModal (props) {
    return <div>
        <div className="absolute top-0 h-full w-full bg-gray-900/50" onClick={() => props.closeModal()} />
        <div className="absolute w-[calc(100%-1.5rem)] max-w-xl h-fit mx-auto mt-40 right-3 left-3 top-0 bottom-0 bg-white shadow rounded">
            <div className="pt-1 px-1 pb-1 float-right cursor-pointer" onClick={() => props.closeModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>
            <div className="pt-10 px-8 pb-10">
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
    </div>
}