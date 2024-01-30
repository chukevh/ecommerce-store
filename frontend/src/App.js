import Header from "./components/Header.js"
import MainContent from "./components/MainContent.js"
import BestSellers from "./components/BestSellers.js"
import BottomDetails from "./components/BottomDetails.js"
import Footer from "./components/Footer.js"
//import SubscribeBox from "./components/SubscribeBox"
import SignUp from "./components/SignUp.js"


export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <BestSellers />
      <BottomDetails />
      <SignUp />
      <Footer />
    </div>
  )
}


