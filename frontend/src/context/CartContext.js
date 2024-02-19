import React from "react"
import ShoppingCart from "../pages/Cart/ShoppingCart"

export const CartContext = React.createContext({
    items: [],
    getItemQuantity: () => {},
    addToCart: () => {},
    decreaseFromCart: () => {},
    deleteFromCart: () => {},
    toggleCart: () => {}
})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = React.useState([
        {
            id: 2, 
            quantity: 1
        }
    ])
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleCart() {
        setIsOpen(prevState => !prevState)
    }

    function getItemQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    function addToCart(id, quantity) {
        setCartItems(prevCart => {
            if (!prevCart.find((item) => item.id === id)) {
                return [
                    ...prevCart,
                    { id, quantity }
                ]
            }
            return prevCart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity
                    } 
                } else {
                    return item
                }
            })
        }) 
    }

    const contextValue= {
        items: cartItems,
        getItemQuantity,
        addToCart,
        // addQuantityToCart,
        // decreaseFromCart,
        // deleteFromCart,
        // getCartQuantity
        toggleCart
    }

    return (
        <CartContext.Provider value={contextValue}>
            { children }
            <ShoppingCart isOpen={isOpen}/>
        </CartContext.Provider>
    )
}