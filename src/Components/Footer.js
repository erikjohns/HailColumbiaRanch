import "./Footer.css";

export default function Footer () {
    return (
        <footer>
            <h1>Hail Columbia Ranch</h1>
            <nav>
                <a href="/" className="footer-navbar-hover-underline">Home</a>
                <a href="/venue" className="footer-navbar-hover-underline">Venue</a>
                <a href="/lodge" className="footer-navbar-hover-underline">Lodge</a>
                <a href="/" className="footer-navbar-hover-underline">Gallery</a>
                <a href="/" className="footer-navbar-hover-underline">Rentals</a>
                <a href="/" className="footer-navbar-hover-underline">Contact</a>
            </nav>
        </footer>
    );
};