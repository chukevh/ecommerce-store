import React from "react"

export const userContext = React.createContext({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export function UserProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    
    const contextValue = { 
        isLoggedIn, 
        setIsLoggedIn
    }

    return (
        <UserProvider value={contextValue}>
            { children }
        </UserProvider>
    )
}