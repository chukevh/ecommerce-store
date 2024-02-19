import React from "react";
import { Offcanvas } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

export default function ShoppingCart(props) {
    const { toggleCart } = React.useContext(CartContext)

    return (
        <Offcanvas show={props.isOpen} onHide={toggleCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}