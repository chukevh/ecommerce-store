import React from "react"
import ShirtCard from "../components/ShirtCard";

export default function Shirts() {
    const [shirts, setShirts] = React.useState([])

    React.useEffect(() => {
        fetch("/api/t-shirts")
            .then(res => res.json())
            .then(data => setShirts(data))
    }, []) 

    const shirtElements = shirts.map(shirt => (
        <ShirtCard 
            key={shirt.id}
            shirt={shirt}
        />
    ))

    return (
        <div className="shirt-main-content">
            <h1 >Explore our Shirt Collection</h1>
            <section className="shirt-container">
                {shirtElements}
            </section>
        </div>
    )
}