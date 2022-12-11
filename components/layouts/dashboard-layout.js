import Header from "../navigation/header"
import Footer from "../navigation/footer"

export default function DashboardLayout (props) {
    return <div className="relative h-full min-h-screen flex flex-col justify-between bg-white">
        <Header />
        {props.body}
        <Footer />
    </div>
}