import React from "react"
import { getShirtData } from "../api"

export const ShirtDataContext = React.createContext()

export function ShirtDataProvider({ children }) {
    const contextValue = null

    React.useEffect(() => {
        contextValue = getShirtData()
        console.log(contextValue)
    }, [])
    

    return (
        <ShirtDataProvider value={contextValue}>
            { children }
        </ShirtDataProvider>
    )
}