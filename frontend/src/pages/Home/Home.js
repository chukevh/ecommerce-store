import MainContent from "./MainContent.js"
import BestSellers from "./BestSellers.js"
import BottomDetails from "../../components/BottomDetails.js"


export default function Home() {
    return (
        <div>
            <MainContent />
            <BestSellers />
            <BottomDetails />
        </div>
    )
}