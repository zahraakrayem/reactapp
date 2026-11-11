import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import "../styles/SearchDrawer.css";

function SearchDrawer({ isOpen, onClose }) {
  const {
    searchText,
    setSearchText,
    showInStock,
    setShowInStock,
    showOutOfStock,
    setShowOutOfStock,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    resetFilters,
  } = useContext(FilterContext);

  return (
    <>
      <div
        className={isOpen ? "overlay show" : "overlay"}
        onClick={onClose}
      ></div>

      <aside className={isOpen ? "drawer open" : "drawer"}>
        <div className="drawer-header">
          <h2>Search</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="drawer-section">
          <label>Title or author</label>
          <input
            type="text"
            placeholder="Search books..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <div className="drawer-section">
          <label>Availability</label>
          <label className="check">
            <input
              type="checkbox"
              checked={showInStock}
              onChange={(e) => setShowInStock(e.target.checked)}
            />
            In stock
          </label>
          <label className="check">
            <input
              type="checkbox"
              checked={showOutOfStock}
              onChange={(e) => setShowOutOfStock(e.target.checked)}
            />
            Out of stock
          </label>
          <p className="drawer-note">
            Out of stock books will be available soon.
          </p>
        </div>

        <div className="drawer-section">
          <label>Price range</label>
          <div className="price-row">
            <input
              type="number"
              placeholder="Min"
              min="0"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <span>to</span>
            <input
              type="number"
              placeholder="Max"
              min="0"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
        </div>

        <button className="reset-btn" onClick={resetFilters}>
          Reset filters
        </button>
      </aside>
    </>
  );
}

export default SearchDrawer;