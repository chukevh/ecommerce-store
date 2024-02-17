import { redirect } from "react-router-dom"

export function requireAuth() {
    const isLoggedIn = localStorage.getItem("loggedin")
    console.log(isLoggedIn)

    if (isLoggedIn !== "true") {
        throw redirect("/login?message=You must login first.")
    }
    return null
}