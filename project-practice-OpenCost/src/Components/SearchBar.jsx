import { useState } from "react";


const SearchBar = () => {
    return (



        <>
            <div className="search-container">
                <div className="search-box">
                    <input
                        type="text"
                        className="search-input"
                        placeholder='Search for a scan or symptom (e.g., “CT Abdomen”)'
                    />
                    <button className="search-button">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}

export default SearchBar;   