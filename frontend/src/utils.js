import { redirect } from "react-router-dom"

export function requireAuth({ request }) {
    const userToken = JSON.parse(localStorage.getItem("userToken"))
    const pathname = new URL(request.url).pathname
    
    if (userToken === null || userToken.isLoggedIn !== true) {
        return redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
    }
    return null
}