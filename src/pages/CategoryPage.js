import books from "../data/books";
import BookList from "../components/BookList";

function CategoryPage({ category, setSelectedBook }) {
  const categoryBooks = books.filter((book) => book.category === category);

  return (
    <div className="page">
      <h1 className="page-title">{category}</h1>
      <BookList books={categoryBooks} setSelectedBook={setSelectedBook} />
    </div>
  );
}

export default CategoryPage;