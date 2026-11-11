import { createContext, useState } from "react";

export const BorrowContext = createContext();

export const MAX_BORROWED = 3;
export const LOAN_DAYS = 14;

export function BorrowProvider({ children }) {
  // Each item looks like: { book: {...}, borrowDate: Date, dueDate: Date }
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  function isBorrowed(bookId) {
    return borrowedBooks.some((item) => item.book.id === bookId);
  }

  // Returns "ok", "already", or "limit" so the page can show a message
  function borrowBook(book) {
    if (isBorrowed(book.id)) {
      return "already";
    }
    if (borrowedBooks.length >= MAX_BORROWED) {
      return "limit";
    }

    const borrowDate = new Date();
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + LOAN_DAYS);

    setBorrowedBooks([...borrowedBooks, { book, borrowDate, dueDate }]);
    return "ok";
  }

  function returnBook(bookId) {
    setBorrowedBooks(borrowedBooks.filter((item) => item.book.id !== bookId));
  }

  return (
    <BorrowContext.Provider
      value={{ borrowedBooks, borrowBook, returnBook, isBorrowed }}
    >
      {children}
    </BorrowContext.Provider>
  );
}