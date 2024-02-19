import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";
import CartItemCard from "./CartItemCard";


export default function ShoppingCart(props) {
    const { toggleCart, items } = React.useContext(CartContext)


    const cartElements = items.map((item) => (
            <CartItemCard
                key={item.id}
                id={item.id}
                quantity={item.quantity}
            />
        )
    )



    return (
        <Offcanvas show={props.isOpen} onHide={toggleCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartElements}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    )
}