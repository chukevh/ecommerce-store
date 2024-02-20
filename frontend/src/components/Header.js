import React from "react"
import logo from "../images/logo.png"
import { Link, NavLink } from "react-router-dom"
import ProfileImg from "../images/profile.png"
import Cart from "../images/cart.jpg"
import MagnifyingGlass from "../images/magnifying-glass.png"
import { CartContext } from "../context/CartContext"

export default function Header() {
    const { items, getCartQuantity } = React.useContext(CartContext)
    const [cartQuantity, setCartQuantity] = React.useState(0)

    React.useEffect(() => {
        setCartQuantity(getCartQuantity())
    }, [items])

    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    const { toggleCart } = React.useContext(CartContext)

    return (
        <nav className="nav-items">
            <Link to="." className="nav-text">
                <img src={logo} alt="Shirt Store Logo" className="nav-logo"/>
                Kev's Shirt Shop
            </Link>
            <div className="nav-links">
                <NavLink 
                    to="t-shirts"
                    style={({ isActive }) => isActive ? activeStyle : null }
                >
                    Shop Shirts
                </NavLink>
                <NavLink 
                    to="sign-up"
                    style={({ isActive }) => isActive ? activeStyle : null }
                >
                    Sign-Up
                </NavLink>
                {/* {
                    localStorage.getItem("loggedin") === "false" && 
                        <NavLink 
                            to="login"
                            style={({ isActive }) => isActive ? activeStyle : null }
                        >
                            Login
                        </NavLink>
                } */}
                <Link 
                    to="search"         
                    className="nav-links-img-container"
                >
                    <img src={MagnifyingGlass} className="nav-links-img" alt=""/>
                </Link> 
                <Link 
                    to="user-profile" className="nav-links-img-container"
                >
                    <img src={ProfileImg} className="nav-links-img" alt=""/>
                </Link> 
                <button className="nav-links-cart-button" onClick={toggleCart}>
                    <img src={Cart} className="nav-links-img cart" alt=""/>
                    {cartQuantity > 0 && <div className="rounded-circle bg-danger"/>}
                </button>
                    
                {/* <Link 
                    to="cart"         
                    className="nav-links-img-container"
                >
                    <img src={Cart} className="nav-links-img" alt=""/>
                </Link>  */}
            </div> 
        </nav>
    )
}