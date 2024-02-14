import { Link, useRouteError } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"


export default function Error() {
    const error = useRouteError()
    
    return (
        <div>
            <Header/>
            <div className="error-page-container">
                <h1>Error: {error.message}</h1>
                <pre>{error.status} - {error.statusText}</pre>
                <Link to=".." className="pnf-return-button">Return to Home</Link>
            </div>
            <Footer/>
        </div>
    )
}