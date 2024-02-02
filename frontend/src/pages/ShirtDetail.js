import React from "react"
import { useParams } from "react-router-dom"
import star from "../images/star.png"

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

    return (
        <div>
            {shirtData ? (
                <div className="shirt-hero-container">
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

                        </p>

                        {/* <p><span className="shirtcard-brand">{shirtData.brand}</span></p>
                        <p>{shirtData.name}</p>
                        <p>${shirtData.price['$numberDecimal']}</p>
                        <div className="card-stats">
                            <img src={star} alt="star" className="card-star"/>
                            <span className="gray">{shirtData.rating['$numberDecimal']}</span>
                            <span className="gray">({shirtData.reviewCount})</span>
                        </div> */}
                    </div>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}