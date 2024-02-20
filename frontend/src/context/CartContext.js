import React from "react"
import ShoppingCart from "../pages/Cart/ShoppingCart"
import { ShirtDataProvider } from "./ShirtDataContext"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const CartContext = React.createContext({
    items: [],
    toggleCart: () => {},
    getItemQuantity: () => {},
    getCartQuantity: () => {},
    addQuantityToCart: () => {},
    addToCart: () => {},
    decreaseFromCart: () => {},
    deleteFromCart: () => {},   
})

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useLocalStorage()//React.useState([])
    const [isOpen, setIsOpen] = React.useState(false)

    function toggleCart() {
        setIsOpen(prevState => !prevState)
    }

    function getItemQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0
    }

    function getCartQuantity() {
        return cartItems.length
    }

    function addQuantityToCart(id, quantity) {
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

    function addToCart(id) {
        setCartItems(prevCart => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    } 
                } else {
                    return item
                }
            })
        }) 
    }

    function decreaseFromCart(id) {
        setCartItems(prevCart => {
            if (prevCart.find((item) => item.id === id).quantity === 1) {
                deleteFromCart(id)
            }
            return prevCart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    }
                } else {
                    return item
                }
            })
        }) 
    }

    function deleteFromCart(id) {
        setCartItems(prevCart => {
            return prevCart.filter((item) => item.id !== id)
        })
    }

    const contextValue = {
        items: cartItems,
        toggleCart,
        getItemQuantity,
        getCartQuantity,
        addQuantityToCart,
        addToCart,
        decreaseFromCart,
        deleteFromCart,  
    }

    return (
        <CartContext.Provider value={contextValue}>
            { children }
            <ShirtDataProvider>
                <ShoppingCart isOpen={isOpen}/>
            </ShirtDataProvider>
        </CartContext.Provider>
    )
}