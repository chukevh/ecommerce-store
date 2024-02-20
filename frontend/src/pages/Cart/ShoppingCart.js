import React from "react";
import { CloseButton, Offcanvas, Stack } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "./CartItemCard";


export default function ShoppingCart(props) {
    const { toggleCart, items } = React.useContext(CartContext)
    const [allShirtsData, setAllShirtsData] = React.useState()
    
    React.useEffect(() => {
        fetch("/api/t-shirts")
            .then(res => res.json())
            .then(data => setAllShirtsData(data))
    }, [])
    
    const cartElements = items.length > 0 && allShirtsData 
    ? items.map((item) => {
        const shirtData = allShirtsData.find((shirt) => shirt.id === item.id)
        return (
            <CartItemCard
                key={item.id}
                shirtData={shirtData}
                quantity={item.quantity}
            />
        )}
    )
    : <p>Your cart is empty!</p>

    return (
        <Offcanvas show={props.isOpen} onHide={toggleCart} placement="end">
            <Offcanvas.Header>
                <Offcanvas.Title >
                    <div className="cart-header-container">
                        <h1 className="cart-text">Cart</h1>
                        <CloseButton 
                            onClick={toggleCart}
                            className="close-button"
                        />
                    </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="cart-items-container">
                    <Stack gap={3}>
                        {cartElements}
                    </Stack>
                    <button 
                        className="cart-checkout-button" 
                    >
                        Checkout
                    </button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}