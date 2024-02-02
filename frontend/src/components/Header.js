import logo from "../images/logo.png"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="nav-items">
            <img src={logo} alt="Shirt Store Logo" className="nav-logo"/>
            <Link to="/" className="nav-text">Kev's Shirt Shop</Link>
            <div className="nav-links">
                <Link to="/t-shirts">Shop Shirts</Link>
                <Link to="/sign-up">Sign-Up</Link>
            </div> 
        </nav>
    )
}