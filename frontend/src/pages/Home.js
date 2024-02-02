import Header from "../components/Header.js"
import MainContent from "../components/MainContent.js"
import BestSellers from "../components/BestSellers.js"
import BottomDetails from "../components/BottomDetails.js"
import Footer from "../components/Footer.js"

export default function Home() {
    return (
        <div>
            <Header />
            <MainContent />
            <BestSellers />
            <BottomDetails />
            <Footer />
        </div>
    )
}