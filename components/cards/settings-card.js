import Image from "next/image"
import ButtonMainAction from "../buttons/button-main-action"

export default function SettingsCard (props) {
    return <li className="flex flex-col justify-between p-8 border border-gray-900 rounded">
        <div className="w-8 mb-4">
            <Image src={props.src} alt="Google Analytics logo" />
        </div>
        <div>
            <p className="text-xl text-gray-900 mb-2">
                {props.title}
            </p>
            <p className="text-gray-900 mb-6">
                {props.description}
            </p>
            <div className="flex justify-center">
                <ButtonMainAction text="Configure" onClick={props.onClick} />
            </div>
        </div>
    </li>
}