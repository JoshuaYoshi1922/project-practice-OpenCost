import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx';
import Map from './Map.jsx';

const SearchPage = ({ onToggleDarkMode, isDarkMode }) => {

    return (
        <>
            <NavBar onToggleDarkMode={onToggleDarkMode} isDarkMode={isDarkMode} />
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

            <div className="results-container">
                <section className="facility-results-section">
                    <div >
                        <p className="results-heading">Results for {/* Render location name here */}</p>
                    </div>
                    <div >
                        <section className="facility-result-card-container">
                            {/* Facility card components would be rendered here */}
                        </section>
                    </div>
                </section>
                <section className="map-panel">
                    <div className="map-header">Map View</div>
                    <div className="map-placeholder">
                        <Map />
                    </div>
                </section>
            </div>


        </>
    );
};

export default SearchPage;