import star from "../../images/star.png"
import { Link } from "react-router-dom"

export default function ShirtCard(props) {
    return (
        <div key={props.shirt.id} className="shirtcard-container">
            <Link to={`/t-shirts/${props.shirt.id}`} state={props.state}>
                {props.shirt.stock === 0 && <div className="shirtcard-badge">SOLD OUT</div>}
                <div className="shirtcard-img-container">
                    <img src={`/images/${props.shirt.img[0]}`} className="shirtcard-img" alt={`${props.shirt.img}`}/>
                </div>
                <div className="shirtcard-details">
                    <p><span className="shirtcard-brand">{props.shirt.brand}</span></p>
                    <p>{props.shirt.name}</p>
                    <p>${props.shirt.price['$numberDecimal']}</p>
                    <div className="card-stats">
                        <img src={star} alt="star" className="card-star"/>
                        <span className="gray">{props.shirt.rating['$numberDecimal']}</span>
                        <span className="gray">({props.shirt.reviewCount})</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}