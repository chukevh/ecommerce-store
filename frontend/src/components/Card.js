import { Link } from "react-router-dom"
import star from "../images/star.png"

export default function Card(props) {
    return (
        <div className="card">
            <Link to={`/t-shirts/${props.shirt.id}`}>
                <div className="card-image-container">
                    {props.shirt.stock === 0 && <div className="card-badge">SOLD OUT</div>}
                    <img 
                        src={`./images/${props.shirt.img}`}
                        alt={props.shirt.name} 
                        className="card-image"
                    />
                </div>
                <div className="card-details">
                    <p><span className="bold">{props.shirt.brand}</span></p>
                    <p>{props.shirt.name}</p>
                    <p>${props.shirt.price}</p>
                    <div className="card-stats">
                        <img src={star} alt="star" className="card-star"/>
                        <span className="gray">{props.shirt.rating}</span>
                        <span className="gray">({props.shirt.reviewCount})</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

/* Conditional Rendering
let badgeText
if (props.stock === 0) {
    badgeText = "SOLD OUT"
} else if (props.stock === "ONLINE") {
    badgeText = "ONLINE"
}
*/

// Props - help us pass data into component making it more reusable
// text="hello"
//