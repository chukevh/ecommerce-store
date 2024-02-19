import React from "react"
import { CartContext } from "../../context/CartContext"

export default function Cart() {
    const [cartItems, setCartItems] = React.useState([{id: 1, quantity: 1}])
    

    const [shirtCount, setShirtCount] = React.useState(0)
    function handleClickIncrement() {
        setShirtCount(prevState => prevState + 1)
    }
    function handleClickDecrement() {
        setShirtCount(prevState => {
            if (prevState > 0) {
                return (prevState - 1)
            } else {
                return 0
            }
        })
    }

    function AddToCart(id, shirtCount) {
        setCartItems(prevCart => {
            return prevCart.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity + shirtCount
                    }
                }
            })
        }, console.log(cartItems)) 
    }


    return (
        <div>
            <h1>Cart page goes here</h1>

            <div className="shirt-quanitity-container">
                <button className="shirt-quantity-button" onClick={handleClickDecrement}>-</button>
                <span className="shirt-quantity-count">{shirtCount}</span>
                <button className="shirt-quantity-button" onClick={handleClickIncrement}>+</button>
            </div>
            <br/>
            <button className="shirt-cart-button" onClick={AddToCart}>Add to Cart</button>
            <CartContext.Provider value={{ cartItems, AddToCart }}>
                
            </CartContext.Provider>
        </div>
    )
}