import Card from "./Card.js"
import { useLoaderData } from "react-router-dom"


export default function BestSellers() {
    const shirtData = useLoaderData()
    
    shirtData.sort((s1, s2) => s2.rating['$numberDecimal'] - s1.rating['$numberDecimal'])
    shirtData.length = 6
    
    const cardElements = shirtData.map((shirt) => {
        return (
            <Card
            key={shirt.id}
            shirt={shirt}
            />
        )}
    )

    return (
        <section className="bestsellers">
            <h1>Best Sellers</h1>
            <div className="cards-list">
                {cardElements}
            </div>
        </section>
    )
}

// {...item} spreads object across literals