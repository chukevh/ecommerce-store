import { Link, Outlet } from "react-router-dom"

export default function UserProfileLayout() {
    return (
        <>
            <nav className="user-profile-nav">
                <Link to="/user-profile/details">Profile</Link>
                <Link to="/user-profile/orders">Orders</Link>
                <Link to="/user-profile/logout">Logout</Link>
            </nav>
            <Outlet />
        </>

    )
}