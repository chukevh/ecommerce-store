//import SubscribeBox from "./components/SubscribeBox"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp.js"
import Home from "./pages/Home.js"
import Shirts from "./pages/Shirts.js"
import ShirtDetail from "./pages/ShirtDetail.js"
import Layout from "./components/Layout.js"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/t-shirts" element={<Shirts />}/>
          <Route path="/t-shirts/:id" element={<ShirtDetail />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


