import { redirect } from "react-router-dom"

export function requireAuth({ request }) {
    const isLoggedIn = localStorage.getItem("loggedin")
    
    const pathname = new URL(request.url).pathname
    
    if (isLoggedIn !== "true") {
        return redirect(`/login?message=You must log in first.&redirectTo=${pathname}`)
    }
    return null
}