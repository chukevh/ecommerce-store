import MainContent from "../components/MainContent.js"
import BestSellers from "../components/BestSellers.js"
import BottomDetails from "../components/BottomDetails.js"


export default function Home() {
    return (
        <div>
            <MainContent />
            <BestSellers />
            <BottomDetails />
        </div>
    )
}