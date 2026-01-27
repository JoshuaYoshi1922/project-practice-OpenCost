import { Link } from "react-router-dom";

const NavBar = () => {

    return (
    <header className="home-header">
        <h1 className="header-title"> <Link to="/">FindAffordableScan</Link></h1>
        <nav>
            <select className="header-select">
                <option value="how-it-works">How It Works</option>
                <option value="about">About Us</option>
                <option value="contact">Contact</option>
            </select>
        </nav>
    </header>
    )
}

export default NavBar;