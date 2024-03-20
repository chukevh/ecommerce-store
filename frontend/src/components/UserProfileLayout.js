import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import React from "react"

export default function UserProfileLayout() {
    const { 
        userToken, 
        logUserIn, 
        logUserOut 
    } = React.useContext(UserContext)
    const navigate = useNavigate()
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline"
    }

    React.useEffect(() => {
        logUserIn()
    }, [])

    function handleLogout() {
        logUserOut()
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