import { Link } from "react-router-dom";

const NavBar = ({ onToggleDarkMode, isDarkMode }) => {

    return (
    <header className="home-header">
        <h1 className="header-title"> <Link to="/">FindAffordableScan</Link></h1>
        <nav className="header-actions">
            <select className="header-select">
                <option value="how-it-works">How It Works</option>
                <option value="about">About Us</option>
                <option value="contact">Contact</option>
            </select>
            <button
                type="button"
                className="dark-mode-toggle"
                onClick={onToggleDarkMode}
                aria-pressed={isDarkMode}                
            >
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </nav>
    </header>
    )
}

export default NavBar;