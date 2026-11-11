import { useContext } from "react";
import { Link } from "react-router-dom";
import { BorrowContext, MAX_BORROWED } from "../context/BorrowContext";
import "../styles/Borrowed.css";

function Borrowed() {
  const { borrowedBooks, returnBook } = useContext(BorrowContext);

  function getDaysLeft(dueDate) {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((dueDate - new Date()) / msPerDay);
  }

  if (borrowedBooks.length === 0) {
    return (
      <div className="page">
        <h1 className="page-title">My Borrowed Books</h1>
        <p className="empty-cart">You have no borrowed books.</p>
        <Link to="/" className="back-link">← Browse books</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">My Borrowed Books</h1>
      <p className="borrow-count">
        {borrowedBooks.length} of {MAX_BORROWED} books borrowed
      </p>

      {borrowedBooks.map((item) => {
        const daysLeft = getDaysLeft(item.dueDate);
        const overdue = daysLeft < 0;

        return (
          <div className="borrowed-item" key={item.book.id}>
            <img src={item.book.cover} alt={item.book.title} />

            <div className="borrowed-info">
              <h3>{item.book.title}</h3>
              <p className="borrowed-author">{item.book.author}</p>
              <p>Borrowed on: {item.borrowDate.toLocaleDateString()}</p>
              <p>Due on: {item.dueDate.toLocaleDateString()}</p>
            </div>

            <span className={overdue ? "days-left overdue" : "days-left"}>
              {overdue
                ? "Overdue by " + Math.abs(daysLeft) + " days"
                : daysLeft + " days left"}
            </span>

            <button
              className="return-btn"
              onClick={() => returnBook(item.book.id)}
            >
              Return
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Borrowed;