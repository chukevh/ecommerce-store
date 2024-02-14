import MainContent from "./MainContent.js"
import BestSellers from "./BestSellers.js"
import BottomDetails from "../../components/BottomDetails.js"
import { getShirtData } from "../../api.js"

export function loader() {
    return getShirtData()
}

export default function Home() {
    return (
        <div>
            <MainContent />
            <BestSellers />
            <BottomDetails />
        </div>
    )
}