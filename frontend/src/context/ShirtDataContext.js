import React from "react"

export const ShirtDataContext = React.createContext([])

export function ShirtDataProvider({ children }) {
    const [shirtData, setShirtData] = React.useState()

    const contextValue = [
        shirtData,
        setShirtData
    ]

    return (
        <ShirtDataContext.Provider value={contextValue}>
            { children }
        </ShirtDataContext.Provider>
    )
}