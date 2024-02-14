//import SubscribeBox from "./components/SubscribeBox"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import SignUp from "./pages/SignUp.js"
import Home, { loader as homeShirtLoader} from "./pages/Home/Home.js"
import Shirts, { loader as shirtLoader } from "./pages/Shirts/Shirts.js"
import ShirtDetail, { loader as singleShirtLoader} from "./pages/ShirtDetails/ShirtDetail.js"
import Layout from "./components/Layout.js"
import UserProfileLayout from "./components/UserProfileLayout.js"
import UserProfileDetails from "./pages/UserProfile/UserProfileDetails.js"
import UserOrderDetails from "./pages/UserProfile/UserOrderDetails.js"
import UserLogout from "./pages/UserProfile/UserLogout.js"
import PageNotFound from "./pages/PageNotFound.js"
import Error from "./components/Error.js"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route 
      index element={<Home />}
      loader={homeShirtLoader}
    />
    <Route path="sign-up" element={<SignUp />}/>
    <Route 
      path="t-shirts" 
      element={<Shirts />} 
      loader={shirtLoader} 
    />
    <Route 
      path="t-shirts/:id" 
      element={<ShirtDetail />}
      loader={({ params }) => {
        return singleShirtLoader(params.id)
      }}
    />
    
    <Route path="user-profile" element={<UserProfileLayout />}>
      <Route index element={<UserProfileDetails />}/>
      <Route path="details" element={<UserProfileDetails />}/>
      <Route path="orders" element={<UserOrderDetails />}/>
      <Route path="logout" element={<UserLogout />}/>
    </Route>
    <Route path="*" element={<PageNotFound />}/>
  </Route>
))

export default function App() {
  return (
      <RouterProvider router={router}/>
  )
}


