import Header from "../navigation/header"
import Footer from "../navigation/footer"

export default function DashboardLayout (props) {
    return <div>
        <Header />
        {props.body}
        <Footer />
    </div>
}