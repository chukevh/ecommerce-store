import React from "react"
import { useLoaderData } from "react-router-dom"

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export default function Login() {
    const [userDetails, setUserDetails] = React.useState(
        {
            email:"",
            password:"",
            passwordConfirm:"",
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
        if (userDetails.password === userDetails.passwordConfirm) {
            console.log("Sucessfully logged in")
        } else {
            console.log("Passwords do not match")
        }

        console.log(userDetails)
        // API send
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
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={userDetails.passwordConfirm}
                />
                <button className="signup-button">Login</button>
            </form>
        </div>
    )
}