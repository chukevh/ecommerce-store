import React from "react"
import { Button, Stack } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"

export default function CartItemCard(props) {
    const shirtData = props.shirtData
    const { addToCart, decreaseFromCart, deleteFromCart } = React.useContext(CartContext)

    
    return (
        <Stack direction="horizontal" gap={2} className="cart-item-card-container">
            <img src={`/images/${shirtData.img}`} alt="shirt" className="cart-item-img"/>
            <div className="cart-item-description-container">
                <div><span className="cart-item-description-text title">{shirtData.name}</span></div>
                <div><span className="cart-item-description-text">OSFA</span></div>
                <div><span className="cart-item-description-text">${shirtData.price['$numberDecimal']}</span></div>
                <div className="cart-item-description-buttons-container">
                    <div className="cart-item-quanitity-container">
                        <button className="cart-item-quantity-button" onClick={() => decreaseFromCart(shirtData.id)}>-</button>
                        <span className="cart-item-quantity-count">{props.quantity}</span>
                        <button className="cart-item-quantity-button" onClick={() => addToCart(shirtData.id)}>+</button>
                    </div>
                    <Button variant="outline-danger" onClick={() => deleteFromCart(shirtData.id)}>Remove</Button>
                </div>

            </div>
        </Stack>
            
    )
}