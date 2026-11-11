import { useState } from "react";
import { Link } from "react-router-dom";
import books from "../data/books";
import "../styles/CategoryDropdown.css";

// Get each category only once
const categories = [...new Set(books.map((book) => book.category))];

function CategoryDropdown({ setSelectedCategory }) {
  const [open, setOpen] = useState(false);

  function chooseCategory(category) {
    setSelectedCategory(category);
    setOpen(false);
  }

  return (
    <div className="dropdown">
      <button className="dropdown-btn" onClick={() => setOpen(!open)}>
        Categories ▾
      </button>

      {open && (
        <ul className="dropdown-menu">
          {categories.map((category) => (
            <li key={category}>
              <Link to="/category" onClick={() => chooseCategory(category)}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CategoryDropdown;