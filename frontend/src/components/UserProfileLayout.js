import { NavLink, Outlet, useNavigate } from "react-router-dom"

export default function UserProfileLayout() {
    const navigate = useNavigate()
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    function handleLogout() {
        localStorage.setItem("loggedin", false)
        console.log("Login reset")
        navigate("/", { replace: true })
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