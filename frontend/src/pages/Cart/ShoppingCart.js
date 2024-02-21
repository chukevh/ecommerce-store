import React from "react";
import { CloseButton, Offcanvas, Stack } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "./CartItemCard";
import { useNavigate } from "react-router-dom";


export default function ShoppingCart(props) {
    const { toggleCart, items } = React.useContext(CartContext)
    const [allShirtsData, setAllShirtsData] = React.useState()
    const navigate = useNavigate()
    
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

    function cartCheckout() {
        let lineItems = []
        lineItems = items.map((item) => {
            const shirtStripeId = allShirtsData.find((shirt) => shirt.id === item.id).stripeId
            return {
                price: shirtStripeId,
                quantity: item.quantity
            }
        })
        console.log(lineItems)
        try {
            fetch("/api/checkout", { 
                method: "post", 
                headers: {'Content-Type': 'application/json'}, 
                body: JSON.stringify(lineItems) 
            })
                .then(res => res.json())
                .then(({ url }) => window.location = url)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Offcanvas show={props.isOpen} onHide={toggleCart} placement="end">
            <Offcanvas.Header>
                <div className="cart-header-container">
                    <h1 className="cart-text">Cart</h1>
                    <CloseButton 
                        onClick={toggleCart}
                        className="close-button"
                    />
                </div>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <div className="cart-container">
                    <div className="cart-items-container">
                        <Stack 
                            gap={3} as="div" 
                            className="cart-item-cards-container"
                        >
                            {cartElements}
                        </Stack>
                    </div>
                    <button 
                            className="cart-checkout-button" 
                            onClick={()=>cartCheckout()}
                        >
                            Checkout
                    </button>
                </div>
            </Offcanvas.Body>
        </Offcanvas>
    )
}