import React from "react"
import Header from "../components/Header";
import ShirtCard from "../components/ShirtCard";
import Footer from "../components/Footer";

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
        <div>
            <Header />
            <section className="shirt-container">
                {shirtElements}
            </section>
            <Footer />
        </div>
    )
}