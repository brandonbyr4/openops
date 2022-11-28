import Link from "next/link"

export default function ButtonMainLink (props) {
    return <Link href={props.href} className="block px-5 py-2 text-white border border-gray-900 bg-gray-900 rounded">
        {props.text}
    </Link>
}