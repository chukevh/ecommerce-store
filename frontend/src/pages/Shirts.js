import React from "react"
import ShirtCard from "../components/ShirtCard";
import { Link, useSearchParams } from "react-router-dom";

export default function Shirts() {
    const [shirts, setShirts] = React.useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    const brandFilter = searchParams.get("brand")

    React.useEffect(() => {
        fetch("/api/t-shirts")
            .then(res => res.json())
            .then(data => setShirts(data))
    }, []) 

    const displayedShirts = brandFilter 
        ? shirts.filter(shirt => shirt.brand.toLowerCase().includes(brandFilter.toLowerCase()))
        : shirts
    
    const shirtElements = displayedShirts.map(shirt => (
        <ShirtCard 
            key={shirt.id}
            shirt={shirt}
        />
    ))

    return (
        <div className="shirt-main-content">
            <h1 >Explore our Shirt Collection</h1>
            <div className="shirt-filters-container">
                <Link to="?brand=Baldurs Gate" className="shirt-brand bg3">Baldurs Gate</Link>
                <Link to="?brand=Nilliur" className="shirt-brand nilliur">Nilliur</Link>
                <Link to="?brand=Stardew" className="shirt-brand stardew">Stardew</Link>
                <Link to="." className="shirt-brand clear-filters">Clear filters</Link>
            </div>
            <section className="shirt-container">
                {shirtElements}
            </section>
        </div>
    )
}