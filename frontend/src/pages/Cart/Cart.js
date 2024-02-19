import React from "react"
import { CartContext } from "../../context/CartContext"

export default function Cart() {
    const { items } = React.useContext(CartContext)
    console.log(items)

    return (
        <div>
            <h1>Cart page goes here</h1>
        </div>
    )
}