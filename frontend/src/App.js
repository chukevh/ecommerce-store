//import SubscribeBox from "./components/SubscribeBox"
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import SignUp, { action as signupAction} from "./pages/SignUp.js"
import Home, { loader as homeShirtLoader} from "./pages/Home/Home.js"
import Shirts, { loader as shirtsLoader } from "./pages/Shirts/Shirts.js"
import ShirtDetail, { loader as singleShirtLoader} from "./pages/ShirtDetails/ShirtDetail.js"
import Layout from "./components/Layout.js"
import UserProfileLayout from "./components/UserProfileLayout.js"
import UserProfileDetails from "./pages/UserProfile/UserProfileDetails.js"
import UserOrderDetails from "./pages/UserProfile/UserOrderDetails.js"
import UserLogout from "./pages/UserProfile/UserLogout.js"
import PageNotFound from "./pages/PageNotFound.js"
import Error from "./components/Error.js"
import { requireAuth } from "./utils.js"
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login.js"
import Cart from "./pages/Cart/Cart.js"
import OrderConfirmation from "./pages/Cart/OrderConfirmation.js"


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />} errorElement={<Error />}>
    <Route 
      index element={<Home />}
      loader={homeShirtLoader}
    />
    <Route 
      path="t-shirts" 
      element={<Shirts />} 
      loader={shirtsLoader} 
    />
    <Route 
      path="t-shirts/:id" 
      element={<ShirtDetail />}
      loader={singleShirtLoader}
    />
    <Route 
      path="sign-up" 
      element={<SignUp />} 
      action={signupAction}
    />
    <Route 
      path="login" 
      element={<Login />} 
      loader={loginLoader} 
      action={loginAction}
    />
    <Route 
      path="cart" 
      element={<Cart />}
    />
    <Route 
      path="cart/order-confirmation" 
      element={<OrderConfirmation />}
    />

    
    <Route path="user-profile" element={<UserProfileLayout />}>
      <Route 
        index 
        element={<UserProfileDetails />}
        loader={async ({ request }) => await requireAuth({ request })}
      />
      <Route 
        path="orders" 
        element={<UserOrderDetails />}
        loader={async ({ request }) => await requireAuth({ request })}
      />
      <Route 
        path="logout" 
        element={<UserLogout />}
        loader={async ({ request }) => await requireAuth({ request })}
      />
    </Route>
    <Route path="*" element={<PageNotFound />}/>
  </Route>
))

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}


