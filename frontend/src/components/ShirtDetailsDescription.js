import React from "react"
import ShirtDataContext from "./ShirtDataContext" 

export default function ShirtDetailsDescription() {
    const shirtData = React.useContext(ShirtDataContext)
    const [descriptionState, setDescriptionState] = React.useState(
        {
            productOn: true,
            materialsOn: false,
            shippingOn: false,
            dimensionsOn: false
        }
    )

    function toggleState(id) {
        setDescriptionState(prevState => {
            return {
                ...prevState,
                [id]: !prevState[id]
            }
        })
    }

    return (
        <div className="shirt-details-description-container">
            <button className="shirt-description-button" onClick={()=>toggleState("productOn")}>Product description</button>
            {descriptionState.productOn === true ? <span>--Product description--<br/></span> : <></>}

            <button className="shirt-description-button" onClick={()=>toggleState("materialOn")}>Materials</button>
            {descriptionState.materialOn === true ? <span>--Material description--<br/></span> : <></>}
    
            <button className="shirt-description-button" onClick={()=>toggleState("shippingOn")}>Shipping and Return</button>
            {descriptionState.shippingOn === true ? <span>--Shipping and Return--<br/></span> : <></>}

            <button className="shirt-description-button" onClick={()=>toggleState("dimensionsOn")}>Dimensions</button>
            {descriptionState.dimensionsOn === true ? <span>--Dimensions--<br/></span> : <></>}
        </div>
    )
}