import React from "react"

export default function ShirtDetailsDescription(props) {
    const shirtData = props.shirtData

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
    console.log()
    return (
        <div className="shirt-details-description-container">
            <button className="shirt-description-button" onClick={()=>toggleState("productOn")}>Product description</button>
            { descriptionState.productOn === true ? 
                <div className="shirt-description-product">
                    <span>{shirtData.description}</span> 
                </div>
                : <></>
            }

            <button className="shirt-description-button" onClick={()=>toggleState("materialOn")}>Materials</button>
            { descriptionState.materialOn === true ? 
                <ul className="shirt-description-list">
                    <li>Heavy weight, 280 GSM, 26-doubles</li>
                    <li>100% carded cotton (marles 15% viscose)</li>
                </ul> 
                : <></>
            }  

            <button className="shirt-description-button" onClick={()=>toggleState("dimensionsOn")}>Dimensions</button>
            { descriptionState.dimensionsOn === true ? 
                <ul className="shirt-description-list">
                    <li>Body Width (cm) 59cm</li>
                    <li>Body Length (cm) 78.5</li>
                </ul> 
                : <></> 
            }

                
            <button className="shirt-description-button" onClick={()=>toggleState("shippingOn")}>Shipping</button>
            { descriptionState.shippingOn === true ? 
                <div>
                    <div className="shirt-description-product">
                        <span><b>Shipping:</b> Regular Australia Post (production time + Standard Shipping) will take approximately 14 days + shipping time.</span>
                    </div>
                </div>
                : <></>
            }
        </div>
    )
}