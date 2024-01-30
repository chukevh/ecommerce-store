import React from "react"

export default function SignUp() {
    const [userDetails, setUserDetails] = React.useState(
        {
            email:"",
            password:"",
            passwordConfirm:"",
            subscribe: false,
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setUserDetails(prevState => {
            return {
                ...prevState,
                [name] : type === "checkbox" ? checked : value
            }
        })
        console.log(userDetails.email)
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (userDetails.password === userDetails.passwordConfirm) {
            console.log("Sucessfully signed up")
        } else {
            console.log("Passwords do not match")
        }

        if (userDetails.subscribe === true) {
            console.log("Thanks for subscribing to our newsletter!")
        }
        console.log(userDetails)
        // API send
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input
                    className="signup-input"
                    type="email"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    name="email"
                    id="email"
                    value={userDetails.email}
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                    name="password"
                    id="password"
                    value={userDetails.password}
                />
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Confirm your Password"
                    onChange={handleChange}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={userDetails.passwordConfirm}
                />
                <input 
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    checked={userDetails.subscribe}
                    onChange={handleChange}
                />
                <label htmlFor="subscribe">I wish to subscribe to the newsletter</label>
                <button className="signup-button">Sign Up</button>
            </form>
        </div>
    )
}