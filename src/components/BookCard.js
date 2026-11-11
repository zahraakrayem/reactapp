import { Link } from "react-router-dom";
import "../styles/BookCard.css";

function BookCard({ book, setSelectedBook }) {
  return (
    <Link
      to="/book"
      className="book-card"
      onClick={() => setSelectedBook(book)}
    >
      <img src={book.cover} alt={book.title} />
      <div className="book-card-info">
        <h3>{book.title}</h3>
        <p className="book-author">{book.author}</p>
        <p className="book-price">${book.price.toFixed(2)}</p>
        {book.inStock ? (
          <span className="stock in">In stock</span>
        ) : (
          <span className="stock out">Out of stock</span>
        )}
      </div>
    </Link>
  );
}

export default BookCard;