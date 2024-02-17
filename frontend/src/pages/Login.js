import React from "react"
import { useLoaderData, Form, redirect } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const data = await loginUser({email, password})
    console.log(data)
    if (data === "Login Successful") {
        localStorage.setItem("loggedin", true)
        throw redirect("/user-profile")
    }
    return null
}

export default function Login() {
    const message = useLoaderData()
    const [userDetails, setUserDetails] = React.useState(
        {
            email:"",
            password:"",
        }
    )

    const [status, setStatus] = React.useState("idle")
    const [error, setError] = React.useState(null)

    
    return (
        <div className="form-container">
            <h1>Sign in to your account</h1>
            { message && <h3 className="login-text">{message}</h3>}
            { error && <h3 className="login-text">{error}</h3>}
            <Form method="post" className="form-signup" replace>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Password"
                    name="password"
                    id="password"
                />
                <button className="signup-button" disabled={status === "submitting" ? true : false}>{status === "submitting" ? "Logging in..." : "Login" }</button>
            </Form>
        </div>
    )
}