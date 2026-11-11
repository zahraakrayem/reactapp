import books from "../data/books";
import BookList from "../components/BookList";

function Catalog({ setSelectedBook }) {
  return (
    <div className="page">
      <h1 className="page-title">All Books</h1>
      <BookList books={books} setSelectedBook={setSelectedBook} />
    </div>
  );
}

export default Catalog;