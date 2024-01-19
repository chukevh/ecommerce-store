import Card from "./Card.js"
import shirtData from "../data/shirtData.js"

export default function BestSellers() {
    const cardElements = shirtData.map((shirt) => {
        return (
        <Card
          key={shirt.id}
          img={shirt.img} 
          brand={shirt.brand} 
          name={shirt.name} 
          price={shirt.price} 
          rating={shirt.rating} 
          reviewcount={shirt.reviewcount}
        />
        )
      }) 
    return (
        <section className="bestsellers">
            <h1>Best Sellers</h1>
            <div className="cards-list">
                {cardElements}
            </div>
        </section>

    )
}