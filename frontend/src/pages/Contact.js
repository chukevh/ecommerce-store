import React from "react";

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "150d3d6d-f692-4325-8c21-20c8b298a5db");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="form-container">
            <h1>Contact Us</h1>
            <form onSubmit={onSubmit} className="form-contact">
                <input 
                    className="signup-input"
                    type="text" 
                    name="name" 
                    placeholder="Name"
                    required
                />
                <input 
                    className="signup-input"
                    type="email" 
                    name="email" 
                    placeholder="Email"
                    required
                />
                <textarea 
                    className="contact-input"
                    name="message" 
                    placeholder="Enter your message"
                    required
                ></textarea>

                <div class="h-captcha" data-captcha="true"></div>
                
                <button type="submit" className="signup-button">Submit</button>

            </form>
            <span className="form-contact-status">{result}</span>

        </div>
    );
}