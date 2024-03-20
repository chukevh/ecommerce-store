import React from "react"
import { useLoaderData, Form, redirect, useActionData, useNavigation, Link } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    
    
    try {
        const userToken = await loginUser({email, password})
        localStorage.setItem("userToken", JSON.stringify(userToken))
        const pathname = new URL(request.url).searchParams.get("redirectTo") || "/user-profile"
        return redirect(pathname)
    } catch (error) {
        return error.message
    }
}

export default function Login() {
    const message = useLoaderData()
    const errorMessage = useActionData()
    const navigation = useNavigation()

    return (
        <div className="form-container">
            <h1>Sign in to your account</h1>
            { message && <h3 className="login-text">{message}</h3> }
            { errorMessage && <h3 className="login-text">{errorMessage}</h3> }
            <Form method="post" className="form-login" replace>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                />
                <input
                    className="signup-input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                />
                <button className="signup-button" disabled={navigation.state === "submitting"}>{navigation.state === "submitting" ? "Logging in..." : "Login" }</button>
            </Form>
            <Link to="/sign-up" className="form-bottom-text">Don't have an account?</Link>
        </div>
    )
}