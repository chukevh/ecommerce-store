import { Stack } from "react-bootstrap"

export default function CartItemCard(props) {
    const shirtData = props.shirtData

    return (
        <Stack direction="horizontal" gap={2}>
            <img src={`/images/${shirtData.img}`} alt="shirt" className="cart-item-img"/>
            Cart item with id: {shirtData.name} and quantity: {props.quantity} 
        </Stack>
            
    )
}