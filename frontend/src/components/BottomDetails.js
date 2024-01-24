export default function BottomDetails() {
    function handleClick() {
        console.log("Subscribed!")
    }
    const handleMouseOver = e => {
        e.target.style.background="grey"
    }
    const handleMouseLeave = e => {
        e.target.style.background=""
    }
    return (
        <section className="subbox">
            <form className="form">
                <label 
                    className="subbox-label"
                >
                    Sign Up For Emails
                </label>
                <input 
                    type="email"
                    placeholder="Enter your Email" 
                    id="email" 
                    name="email"
                    className="subbox-input"
                />
                <button 
                    type="submit"
                    className="subbox-button"
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    Subscribe
                </button>
            </form>
        </section>
    )
}