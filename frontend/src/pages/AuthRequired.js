import { Outlet, Navigate } from "react-router-dom";

export default function AuthRequired() {
    const isLoggedIn = false
    if (!isLoggedIn) {
        return <Navigate to="sign-up"/>
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}