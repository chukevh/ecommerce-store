

export default function BottomDetails() {
    function handleSubmit() {
        console.log("Subscribed!")
    }
    const handleMouseOver = e => {
        e.target.style.background="grey"
    }
    const handleMouseLeave = e => {
        e.target.style.background=""
    }
    return (
        <div className="subbox">
            <form className="form" onSubmit={handleSubmit}>
                <label 
                    className="subbox-label"
                    htmlFor="email"
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
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    Subscribe
                </button>
            </form>
        </div>
    )
}