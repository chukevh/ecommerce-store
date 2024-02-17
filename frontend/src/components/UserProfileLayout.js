import { NavLink, Outlet, redirect } from "react-router-dom"

export default function UserProfileLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    function handleLogout() {
        localStorage.setItem("loggedin", false)
        console.log("Login reset")
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
                <button onClick={handleLogout}>Log out</button>
            </nav>
            <Outlet />
        </>

    )
}