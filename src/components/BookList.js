import { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import BookCard from "./BookCard";
import "../styles/BookList.css";

function BookList({ books, setSelectedBook }) {
  const { searchText, showInStock, showOutOfStock, minPrice, maxPrice } =
    useContext(FilterContext);

  const filteredBooks = books.filter((book) => {
    // 1. Search by title or author
    const text = searchText.toLowerCase();
    const matchesText =
      book.title.toLowerCase().includes(text) ||
      book.author.toLowerCase().includes(text);

    // 2. Stock: if both or neither box is checked, show everything
    let matchesStock = true;
    if (showInStock && !showOutOfStock) {
      matchesStock = book.inStock;
    } else if (showOutOfStock && !showInStock) {
      matchesStock = !book.inStock;
    }

    // 3. Price range: an empty box means no limit
    const min = minPrice === "" ? 0 : Number(minPrice);
    const max = maxPrice === "" ? Infinity : Number(maxPrice);
    const matchesPrice = book.price >= min && book.price <= max;

    return matchesText && matchesStock && matchesPrice;
  });

  if (filteredBooks.length === 0) {
    return <p className="no-books">No books found.</p>;
  }

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          setSelectedBook={setSelectedBook}
        />
      ))}
    </div>
  );
}

export default BookList;