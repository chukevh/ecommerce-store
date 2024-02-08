import React from "react"
import { Link, useParams } from "react-router-dom"
import ShirtDetailsDescription from "../components/ShirtDetailsDescription"
import ShirtDataContext from "../components/ShirtDataContext"
//import star from "../images/star.png"


export default function ShirtDetail() {
    const [shirtData, setShirtData] = React.useState(null)
    const [shirtCount, setShirtCount] = React.useState(0)
    const params = useParams()

    React.useEffect(() => {
        fetch(`/api/t-shirts/${params.id}`)
            .then(res => res.json())
            .then(data => setShirtData(data[0]))
    }, [params])

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

    return (
        <div>
            {shirtData ? (
                <div className="shirt-hero-container">
                    <Link to=".." relative="path" className="back-button">← Back to all shirts</Link>
                    <div className="shirt-detail-img-container">
                        <div className="shirt-hero-img-container">
                            <img src={`/images/${shirtData.img}`} alt="shirt" className="shirt-hero-img"/>
                        </div>
                        <div className="shirt-details-container">
                            <span className="shirt-details-name">{shirtData.name}</span>
                            <p>
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
                                <div class="shirt-quanitity-container">
                                    <button className="shirt-quantity-button" onClick={handleClickDecrement}>-</button>
                                    <span className="shirt-quantity-count">{shirtCount}</span>
                                    <button className="shirt-quantity-button" onClick={handleClickIncrement}>+</button>
                                </div>
                                <br/>
                                <button className="shirt-cart-button" onClick={handleAddToCart}>Add to Cart</button>
                                <ShirtDataContext.Provider value={shirtData}>
                                    <ShirtDetailsDescription />
                                </ShirtDataContext.Provider>
                            </p>
                        </div>
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}