import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Catalog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </div>
      <p>© 2026 Library. All rights reserved.</p>
    </footer>
  );
}

export default Footer;