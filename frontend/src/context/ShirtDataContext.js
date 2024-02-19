import React from "react"
import { getShirtData } from "../api"

export const ShirtDataContext = React.createContext()

export function ShirtDataProvider({ children }) {
    const [shirtsData, setShirtsData] = React.useState()

    React.useEffect(() => async() => {
        await fetch("/api/t-shirts")
            .then(res => res.json())
            .then(data => setShirtsData(data))
    }, [])


    return (
        <ShirtDataContext.Provider value={shirtsData}>
            { children }
        </ShirtDataContext.Provider>
    )
}