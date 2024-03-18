import React from "react"
import { useUserLocalStorage } from "../hooks/useLocalStorage"

export const UserContext = React.createContext({
    userToken: {},
    logUserIn: () => {},
    logUserOut: () => {}
})

export function UserProvider({ children }) {
    const [userToken, setUserToken] = React.useState(useUserLocalStorage())

    function logUserIn() {
        setUserToken(JSON.parse(localStorage.getItem("userToken")))
    }

    function logUserOut() {
        localStorage.removeItem("userToken")
        setUserToken({})
    }

    const contextValue = { 
        userToken, 
        logUserIn,
        logUserOut
    }

    return (
        <UserContext.Provider value={contextValue}>
            { children }
        </UserContext.Provider>
    )
}