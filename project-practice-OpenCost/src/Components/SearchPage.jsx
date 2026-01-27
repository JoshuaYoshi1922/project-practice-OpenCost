import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import Map from './Map.jsx';

const SearchPage = () => {

    return (
        <>
            <NavBar />
            <div>
                <br />

                <div className="search-bar-wrapper">
                    <SearchBar />

                    <div className="controls-bar">

                        <div className="dropdown">
                            <label className="visually-hidden" htmlFor="sortSelect">Sort by: </label>
                            <select id="sortSelect" className="dropdown-trigger">
                                <option defaultValue>Price (Low to High)</option>
                                <option>Price (High to Low)</option>
                                <option>Distance</option>
                                <option>Rating</option>
                            </select>
                        </div>

                        <button className="filter-button" type="button">
                            Filters
                            <span className="filter-icon">⏷</span>
                        </button>
                    </div>

                </div>

                <br />
            </div>
            <hr />

             <Map />


        </>
    );
};

export default SearchPage;