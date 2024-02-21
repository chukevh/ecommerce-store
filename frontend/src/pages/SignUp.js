import React from "react"
import { Form, Link, useActionData } from "react-router-dom"
import { signupUser } from "../api"

export async function action({ request }) {
    const formData = await request.formData()
    const firstName = formData.get("firstName")
    const lastName = formData.get("firstName")
    const email = formData.get("email")
    const password = formData.get("password")
    const passwordConfirm = formData.get("passwordConfirm")
    const subscribed = formData.get("subscribed") === "on" ? true : false
    const userDetails = {
        firstName,
        lastName,
        email,
        password,
        subscribed
    }

    try {
        if (password === passwordConfirm) {
            await signupUser(userDetails)
        } else {
            throw new Error("Passwords do not match")
        }
    } catch (error) {
        return error.message
    }
    
    return null
}

export default function SignUp() {
    const errorMessage = useActionData()
    console.log(errorMessage)
    return (
        <div className="form-container">
            <h1>Sign up for an account</h1>
            {errorMessage && <h3 className="login-text">{errorMessage}</h3>}
            <Form method="post" className="form-signup">
                <input
                    className="signup-input"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    required
                />
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Password"
                    name="password"
                    id="password"
                    required
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    required
                />
                <div className="signup-sub-container">
                    <input 
                        type="checkbox"
                        name="subscribed"
                        id="subscribed"
                    />
                    <label htmlFor="subscribed">Subscribe to the newsletter</label>
                </div>
                <button className="signup-button">Sign Up</button>
            </Form>
            <Link to="/login" className="form-bottom-text">Already have an account?</Link>
        </div>
    )
}