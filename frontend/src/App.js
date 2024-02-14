//import SubscribeBox from "./components/SubscribeBox"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp.js"
import Home from "./pages/Home/Home.js"
import Shirts from "./pages/Shirts/Shirts.js"
import ShirtDetail from "./pages/ShirtDetails/ShirtDetail.js"
import Layout from "./components/Layout.js"
import UserProfileLayout from "./components/UserProfileLayout.js"
import UserProfileDetails from "./pages/UserProfile/UserProfileDetails.js"
import UserOrderDetails from "./pages/UserProfile/UserOrderDetails.js"
import UserLogout from "./pages/UserProfile/UserLogout.js"
import PageNotFound from "./pages/PageNotFound.js"

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="sign-up" element={<SignUp />}/>
            <Route path="t-shirts" element={<Shirts />}/>
            <Route path="t-shirts/:id" element={<ShirtDetail />}/>
            <h1>hello</h1>

            <Route path="user-profile" element={<UserProfileLayout />}>
              <Route index element={<UserProfileDetails />}/>
              <Route path="details" element={<UserProfileDetails />}/>
              <Route path="orders" element={<UserOrderDetails />}/>
              <Route path="logout" element={<UserLogout />}/>
            </Route>
            <Route path="*" element={<PageNotFound />}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}


