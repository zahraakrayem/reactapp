import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";
import "../styles/Navbar.css";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import SearchDrawer from "./SearchDrawer";

function Navbar({ setSelectedCategory }) {
  const { cartCount } = useContext(CartContext);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <svg
          className="logo-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
        <span>Bookhaven</span>
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <CategoryDropdown setSelectedCategory={setSelectedCategory} />
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li><Link to="/borrowed">My Books</Link></li>
      </ul>

      <div className="nav-actions">
        <button
          className="icon-btn"
          title="Search"
          aria-label="Search"
          onClick={() => setSearchOpen(true)}
        >
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
        <Link to="/cart" className="icon-btn" aria-label="Cart">
          <svg
            className="icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          <span className="cart-badge" key={cartCount}>
            {cartCount}
          </span>
        </Link>
        <Link to="/login" className="icon-btn">
          Login
        </Link>
      </div>
      <SearchDrawer isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}

export default Navbar;