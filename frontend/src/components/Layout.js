import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { CartProvider } from "../context/CartContext"
import { UserProvider } from "../context/UserContext"

export default function Layout() {
    return (
        <div className="layout">
            <UserProvider>
                <CartProvider>
                    <Header />
                    <div className="app">
                        <Outlet />
                    </div>
                    <Footer />
                </CartProvider>
            </UserProvider>
        </div>
    )
}