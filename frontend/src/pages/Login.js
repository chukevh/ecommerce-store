import React from "react"
import { useLoaderData } from "react-router-dom"
import { loginUser } from "../api"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [userDetails, setUserDetails] = React.useState(
        {
            email:"",
            password:"",
        }
    )

    const message = useLoaderData()
    
    
    function handleChange(event) {
        const {name, value} = event.target
        setUserDetails(prevState => {
            return {
                ...prevState,
                [name] : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(userDetails)
        loginUser(userDetails)
            .then(data => console.log(data))
    }
    
    return (
        <div className="form-container">
            <h1>Sign in to your account</h1>
            { message && <h3 className="login-text">{message}</h3>}
            <form className="form-signup" onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                    value={userDetails.email}
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Password"
                    onChange={handleChange}
                    name="password"
                    id="password"
                    value={userDetails.password}
                />
                <button className="signup-button">Login</button>
            </form>
        </div>
    )
}