import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"
import ShirtDetailsDescription from "./ShirtDetailsDescription"
import { getSingleShirtData } from "../../api"
import { CartContext } from "../../context/CartContext"
import ShirtDetailPictures from "./ShirtDetailPictures"
//import star from "../images/star.png"

export function loader({ params }) {
    return getSingleShirtData(params.id)
}

export default function ShirtDetail() {
    const [shirtQuantity, setShirtQuantity] = React.useState(0)
    const location = useLocation()
    const shirtData = useLoaderData()[0]
    const { addQuantityToCart } = React.useContext(CartContext)
    
    function handleClickIncrement() {
        setShirtQuantity(prevState => prevState + 1)
    }

    function handleClickDecrement() {
        setShirtQuantity(prevState => {
            if (prevState > 0) {
                return (prevState - 1)
            } else {
                return 0
            }
        })
    }

    const search = `?${location.state?.search}` || ""
    // same as const search = location.state && location.state.search || ""
    
    return (
        <div>
            <div className="shirt-hero-container">
                <Link to={`../${search}`} relative="path" className="back-button">← Back to all shirts</Link>
                <div className="shirt-detail-container">
                    <ShirtDetailPictures shirtData={shirtData}/>
                    <div className="shirt-details-container">
                        <span className="shirt-details-name">{shirtData.name}</span>
                        <div>
                            <span className="shirt-details-price">${shirtData.price['$numberDecimal']}</span>
                            <br/>
                            <i className="shirt-details-price-info">Tax included. Shipping calculated at checkout.</i>
                            <br/>
                            <br/>
                            <span>Brand: <span className="bold">{shirtData.brand}</span></span>
                            <br/>
                            <br/>
                            <span>Colour: <span className="bold">White</span></span>
                            <br/>
                            <br/>
                            <span>Size:</span>
                            <br/>
                            <button className="shirt-details-size-btn"> OSFA </button>
                            <br/>
                            <br/>
                            <span>Quantity:</span>
                            <br/>
                            <div className="shirt-quanitity-container">
                                <button className="shirt-quantity-button" onClick={handleClickDecrement}>-</button>
                                <span className="shirt-quantity-count">{shirtQuantity}</span>
                                <button className="shirt-quantity-button" onClick={handleClickIncrement}>+</button>
                            </div>
                            <br/>
                            <button className="shirt-cart-button" onClick={() => addQuantityToCart(shirtData.id, shirtQuantity)}>Add to Cart</button>
                            <ShirtDetailsDescription 
                                shirtData={shirtData}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}