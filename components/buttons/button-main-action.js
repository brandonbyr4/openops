export default function ButtonMainAction (props) {
    return <button className="block px-5 py-2 text-gray-900 border border-gray-900 hover:text-white hover:bg-gray-900 rounded transition">
        {props.text}
    </button>
}