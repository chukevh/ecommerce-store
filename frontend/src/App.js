//import SubscribeBox from "./components/SubscribeBox"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp.js"
import Home from "./pages/Home.js"
import Shirts from "./pages/Shirts.js"
import ShirtDetail from "./pages/ShirtDetail.js"
import Layout from "./components/Layout.js"
import UserProfileLayout from "./components/UserProfileLayout.js"
import UserProfileDetails from "./components/UserProfileDetails.js"
import UserOrderDetails from "./components/UserOrderDetails.js"
import UserLogout from "./components/UserLogout.js"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="sign-up" element={<SignUp />}/>
            <Route path="t-shirts" element={<Shirts />}/>
            <Route path="t-shirts/:id" element={<ShirtDetail />}/>

            <Route path="user-profile" element={<UserProfileLayout />}>
              <Route index element={<UserProfileDetails />}/>
              <Route path="details" element={<UserProfileDetails />}/>
              <Route path="orders" element={<UserOrderDetails />}/>
              <Route path="logout" element={<UserLogout />}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}


