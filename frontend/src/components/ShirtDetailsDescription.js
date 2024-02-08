import React from "react"
import ShirtDataContext from "./ShirtDataContext" 

export default function ShirtDetailsDescription() {
    const shirtData = React.useContext(ShirtDataContext)

    return (
        <div className="shirt-details-description-container">
            <p>
                <span>--Product description--</span>
                <br/>
                <span>--Materials--</span>
                <br/>
                <span>--Shipping and Return--</span>
                <br/>
                <span>--Dimensions--</span>
            </p>
        </div>
    )
}