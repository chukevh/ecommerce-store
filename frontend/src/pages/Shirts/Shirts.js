import React from "react"
import ShirtCard from "./ShirtCard";
import { useLoaderData, useSearchParams } from "react-router-dom";
import { getShirtData } from "../../api";

export function loader() {
    return getShirtData()
}

export default function Shirts() {
    const [searchParams, setSearchParams] = useSearchParams()
    const shirts = useLoaderData()
    const genreFilter = searchParams.get("genre")
    
    const displayedShirts = genreFilter 
        ? shirts.filter(shirt => shirt.genre.toLowerCase().includes(genreFilter.toLowerCase()))
        : shirts
    
    const shirtElements = displayedShirts.map(shirt => (
        <ShirtCard 
            key={shirt.id}
            shirt={shirt}
            state={{ search: searchParams.toString()}}
        />
    ))

    function handleSearchParams(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    return (
        <div className="shirt-main-content">
            <h1 >Explore our Shirt Collection</h1>
            <div className="shirt-filters-container">
                <button 
                    onClick={() => handleSearchParams("genre", "games")} 
                    className={`shirt-genre-button ${genreFilter === "games" ? "selected" : ""}`}
                >Games</button>
                <button 
                    onClick={() => handleSearchParams("genre", "anime")} 
                    className={`shirt-genre-button ${genreFilter === "anime" ? "selected" : ""}`}
                >Anime</button>
                <button 
                    onClick={() => handleSearchParams("genre", "misc")} 
                    className={`shirt-genre-button ${genreFilter === "misc" ? "selected" : ""}`}
                >Misc</button>
                <button 
                    onClick={() => setSearchParams({})} 
                    className="shirt-genre-button clear-filters-button"
                >Clear filters</button> 
            </div>
            <section className="shirt-container">
                {shirtElements}
            </section>
        </div>
    )
}