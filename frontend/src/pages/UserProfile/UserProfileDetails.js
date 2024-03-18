import React from "react"
import { UserContext } from "../../context/UserContext"
import { Form } from "react-router-dom"

export default function UserProfileDetails() {
    const { userToken } = React.useContext(UserContext)
    const [userForm, setUserForm] = React.useState({
        email: "",
        firstName: "",
        lastName: "",
        subscribed: false
    })

    React.useEffect(() => {
        if (Object.keys(userToken).length > 0) {
            setUserForm({
                email: userToken.email,
                firstName: userToken.firstName,
                lastName: userToken.lastName,
                subscribed: userToken.subscribed
            })
        }
    }, [userToken])

    function handleChange(event) {
        const {name, value, type} = event.target
        setUserForm(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? !prevForm.subscribed : value
            }
        })
        console.log(userForm)
    }

    return (
        <div className="user-form-container">
            <h1>User Profile</h1>
            <Form method="post" className="user-form-signup">
                <label>Email</label>
                <input
                    className="signup-input bg-gray"
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    value={userForm.email}
                    readOnly
                />
                <label>First Name</label>
                <input
                    className="signup-input"
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    id="firstName"
                    value={userForm.firstName}
                    onChange={handleChange}
                    required
                />
                <label>Last Name</label>
                <input
                    className="signup-input"
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    id="lastName"
                    value={userForm.lastName}
                    onChange={handleChange}
                    required
                />

                <div className="signup-sub-container">
                    <input 
                        type="checkbox"
                        name="subscribed"
                        id="subscribed"
                        checked={userForm.subscribed}
                        onChange={handleChange}
                    />
                    <label htmlFor="subscribed">Subscribe to the newsletter</label>
                </div>
                <button className="signup-button">Update</button>
            </Form>
        </div>
    )
}