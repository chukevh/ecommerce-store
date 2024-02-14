import { Link } from "react-router-dom"

export default function PageNotFound() {
    return (
        <div className="page-not-found-container">
            <h1>Sorry! The page you were looking for was not found.</h1>
            <Link to=".." className="pnf-return-button">Return to Home</Link>
        </div>
    )
}