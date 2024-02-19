import React from "react"

export const CartContext = React.createContext({
    items: [],
    getItemQuantity: () => {},
    addToCart: () => {},
    decreaseFromCart: () => {},
    deleteFromCart: () => {},
})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = React.useState([
        {
            id: 1, 
            quantity: 1
        }
    ])

    function getItemQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    const contextValue= {
        items: cartItems,
        getItemQuantity,
        // addToCart,
        // decreaseFromCart,
        // deleteFromCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            { children }
        </CartContext.Provider>
    )
}