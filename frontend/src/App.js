//import SubscribeBox from "./components/SubscribeBox"
import SignUp from "./pages/SignUp.js"
import Home from "./pages/Home.js"
import Shirts from "./pages/Shirts.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/t-shirts" element={<Shirts />}/>
      </Routes>
    </BrowserRouter>
  )
}


