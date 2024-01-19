import montage from "../images/shirts-montage.jpg"

export default function MainContent() {
    return (
        <div>
            <section className="hero">
                <img src={montage} alt="Graphic tees montage" className="hero-montage"/>
                <h1 className="hero-header">Your Favourite Graphic Tees</h1>
                <p className="hero-text">Step into the real world of gaming nostalgia with our online anime shirt store! Revisit your favorite games through our exclusive collection of character-themed apparel. Wear your cherished characters boldly, expressing your passion for gaming in style.</p>
            </section>
        </div>
    )
}