import logo from "../images/logo.png"
import { Link } from "react-router-dom"
import ProfileImg from "../images/profile.png"

export default function Header() {
    return (
        <nav className="nav-items">
            <img src={logo} alt="Shirt Store Logo" className="nav-logo"/>
            <Link to="/" className="nav-text">Kev's Shirt Shop</Link>
            <div className="nav-links">
                <Link to="/t-shirts">Shop Shirts</Link>
                <Link to="/sign-up">Sign-Up</Link>
                <Link to="/user-profile" className="nav-links-img-container">
                <img src={ProfileImg} className="nav-links-img"/>
                </Link> 
            </div> 
        </nav>
    )
}