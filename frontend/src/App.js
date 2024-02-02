//import SubscribeBox from "./components/SubscribeBox"
import SignUp from "./pages/SignUp.js"
import Home from "./pages/Home.js"
import Shirts from "./pages/Shirts.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ShirtDetail from "./pages/ShirtDetail.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/t-shirts" element={<Shirts />}/>
        <Route path="/t-shirts/:id" element={<ShirtDetail />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


