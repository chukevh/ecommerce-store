import React from "react";

export function useLocalStorage() {
    const [value, setValue] = React.useState([])
    const [initialize, setInitialize] = React.useState(false)
    const jsonValue = localStorage.getItem("kevshoppingcart")
    
    if (initialize === false) {
        jsonValue !== null ? setValue(JSON.parse(jsonValue)) : setValue([])
        setInitialize(true)
    }
    
    React.useEffect(() => {
        localStorage.setItem("kevshoppingcart", JSON.stringify(value))
    }, [value])

    return [value, setValue]
}

export function useUserLocalStorage() {
    
}