import React from "react"
import { Link, useLocation, useLoaderData } from "react-router-dom"
import ShirtDetailsDescription from "./ShirtDetailsDescription"
import ShirtDataContext from "../../components/ShirtDataContext"
import { getSingleShirtData } from "../../api"
//import star from "../images/star.png"

export function loader(paramsId) {
    return getSingleShirtData(paramsId)
}

export default function ShirtDetail() {
    const [shirtCount, setShirtCount] = React.useState(0)
    const location = useLocation()
    
    const shirtData = useLoaderData()[0]

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

    function handleAddToCart() {
        //API to add to cart
    }

    const search = `?${location.state?.search}` || ""
    // const search = location.state && location.state.search || ""
    

    return (
        <div>
            <div className="shirt-hero-container">
                <Link to={`../${search}`} relative="path" className="back-button">← Back to all shirts</Link>
                <div className="shirt-detail-img-container">
                    <div className="shirt-hero-img-container">
                        <img src={`/images/${shirtData.img}`} alt="shirt" className="shirt-hero-img"/>
                    </div>
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
                                <span className="shirt-quantity-count">{shirtCount}</span>
                                <button className="shirt-quantity-button" onClick={handleClickIncrement}>+</button>
                            </div>
                            <br/>
                            <button className="shirt-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                            <ShirtDataContext.Provider value={shirtData}>
                                <ShirtDetailsDescription />
                            </ShirtDataContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}