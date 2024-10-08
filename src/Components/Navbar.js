import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HCRLogo from '../Assets/Images/HCRLogo.png'
// import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

export default function Navbar () {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    if (window.innerWidth < 992) {
        return (
            <nav className="main-navbar-mobile">
                <div className="main-navbar-container-mobile">
                    <a href="/" className="main-navbar-logo-mobile">HCR</a>
                    {!showMenu && (
                        <MenuIcon fontSize="large" className="main-navbar-menu-icon" onClick={toggleMenu}/>
                    )}
                    {showMenu && (
                        <CloseIcon fontSize="large" className="main-navbar-menu-icon" onClick={toggleMenu}/>
                    )}
                </div>
                {showMenu && (
                    <div className="main-navbar-links-container-mobile">
                        <a href="/"><span className="main-navbar-hover-underline">Home</span></a>
                        <a href="/venue"><span className="main-navbar-hover-underline">Venue</span></a>
                        <a href="/lodge"><span className="main-navbar-hover-underline">Lodge</span></a>
                        <a href="/gallery"><span className="main-navbar-hover-underline">Gallery</span></a>
                        <a href="/rentals"><span className="main-navbar-hover-underline">Rentals</span></a>
                        <a href="/contact"><span className="main-navbar-hover-underline">Contact</span></a>
                    </div>
                )}
            </nav>
        );
    }

    else {
        return (
            <nav className="main-navbar">
                <div className="main-navbar-container">
                    <a href="/"><span className="main-navbar-hover-underline">Home</span></a>
                    <a href="/venue"><span className="main-navbar-hover-underline">Venue</span></a>
                    <a href="/lodge"><span className="main-navbar-hover-underline">Lodge</span></a>
                    <a href="/" className="main-navbar-logo"><img src={HCRLogo} alt={"hcr logo"} className={"main-navbar-logo-image"}/></a>
                    <a href="/gallery"><span className="main-navbar-hover-underline">Gallery</span></a>
                    <a href="/rentals"><span className="main-navbar-hover-underline">Rentals</span></a>
                    <a href="/contact"><span className="main-navbar-hover-underline">Contact</span></a>
                </div>
            </nav>
        );
    }
}