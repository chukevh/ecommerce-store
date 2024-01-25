import React from "react"

export default function SubscribeBox() {
    const [email, setEmail] = React.useState("")

    function handleChange(event) {
        setEmail(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        //submitToApi()
        console.log(email)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your Email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
                <label htmlFor="email">Sign Up For Emails</label>
                <button>Subcribe</button>
            </form>
        </div>
    )
}