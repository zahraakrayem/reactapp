import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  BorrowContext,
  MAX_BORROWED,
  LOAN_DAYS,
} from "../context/BorrowContext";
import "../styles/BookDetails.css";

function BookDetails({ book }) {
  const { addToCart } = useContext(CartContext);
  const { borrowBook, isBorrowed } = useContext(BorrowContext);
  const [added, setAdded] = useState(false);
  const [borrowResult, setBorrowResult] = useState("");

  if (!book) {
    return (
      <div className="page">
        <h1>No book selected</h1>
        <Link to="/" className="back-link">← Back to catalog</Link>
      </div>
    );
  }

  const alreadyBorrowed = isBorrowed(book.id);

  function handleAdd() {
    addToCart(book);
    setAdded(true);
  }

  function handleBorrow() {
    const result = borrowBook(book);
    setBorrowResult(result);
  }

  let borrowText = "Borrow";
  if (!book.inStock) {
    borrowText = "Available soon";
  } else if (alreadyBorrowed) {
    borrowText = "Already borrowed";
  }

  return (
    <div className="page">
      <Link to="/" className="back-link">← Back to catalog</Link>

      <div className="details">
        <img src={book.cover} alt={book.title} className="details-cover" />

        <div className="details-info">
          <h1>{book.title}</h1>
          <p className="details-author">by {book.author}</p>
          <p className="details-category">Category: {book.category}</p>
          <p className="details-price">${book.price.toFixed(2)}</p>

          {book.inStock ? (
            <span className="stock in">In stock</span>
          ) : (
            <span className="stock out">Out of stock</span>
          )}

          <p className="details-description">{book.description}</p>

          <div className="details-buttons">
            <button
              className="add-btn"
              disabled={!book.inStock}
              onClick={handleAdd}
            >
              {book.inStock ? "Add to cart" : "Available soon"}
            </button>

            <button
              className="borrow-btn"
              disabled={!book.inStock || alreadyBorrowed}
              onClick={handleBorrow}
            >
              {borrowText}
            </button>
          </div>

          {added && <p className="added-msg">✓ Added to cart</p>}

          {borrowResult === "ok" && (
            <p className="borrow-msg">
              ✓ Borrowed! Please return it within {LOAN_DAYS} days.
            </p>
          )}
          {borrowResult === "limit" && (
            <p className="borrow-msg error">
              You can borrow up to {MAX_BORROWED} books. Return one first.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;