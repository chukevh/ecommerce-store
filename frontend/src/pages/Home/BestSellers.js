import Card from "./Card.js"
import { useLoaderData } from "react-router-dom"


export default function BestSellers() {
    const shirtData = useLoaderData()
    const filteredShirts = shirtData.filter((shirt) => shirt.name !== "???")
    
    filteredShirts.sort((s1, s2) => s2.rating['$numberDecimal'] - s1.rating['$numberDecimal'])
    filteredShirts.length = 6
    
    const cardElements = filteredShirts.map((shirt) => {
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