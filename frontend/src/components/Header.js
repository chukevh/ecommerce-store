import logo from "../images/logo.png"

export default function Header() {
    return (
        <nav className="nav-items">
            <img src={logo} alt="Shirt Store Logo" className="nav-logo"/>
            <h1 className="nav-text">Kev's Shirt Shop</h1>
        </nav>
    )
}