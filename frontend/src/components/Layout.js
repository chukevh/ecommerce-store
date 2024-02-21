import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { CartProvider } from "../context/CartContext"

export default function Layout() {
    return (
        <div className="layout">
            <CartProvider>
                <Header />
                <div className="app">
                    <Outlet />
                </div>
                <Footer />
            </CartProvider>
        </div>
    )
}