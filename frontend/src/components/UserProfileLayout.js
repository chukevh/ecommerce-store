import { NavLink, Outlet } from "react-router-dom"

export default function UserProfileLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }
    return (
        <>
            <nav className="user-profile-nav">
                <NavLink 
                    to="."
                    end
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Profile
                </NavLink>
                <NavLink 
                    to="orders"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Orders
                </NavLink>
                <NavLink 
                    to="logout"
                    style={({ isActive }) => isActive ? activeStyle : null}
                >
                    Logout
                </NavLink>
            </nav>
            <Outlet />
        </>

    )
}