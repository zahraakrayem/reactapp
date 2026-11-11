import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Each item looks like: { book: {...}, quantity: 1 }
  const [cartItems, setCartItems] = useState([]);

  function addToCart(book) {
    const existing = cartItems.find((item) => item.book.id === book.id);

    if (existing) {
      // Already in the cart: increase the quantity
      setCartItems(
        cartItems.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // New book: add it with quantity 1
      setCartItems([...cartItems, { book: book, quantity: 1 }]);
    }
  }

  function removeFromCart(bookId) {
    setCartItems(cartItems.filter((item) => item.book.id !== bookId));
  }

  function increaseQuantity(bookId) {
    setCartItems(
      cartItems.map((item) =>
        item.book.id === bookId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  function decreaseQuantity(bookId) {
    setCartItems(
      cartItems.map((item) =>
        item.book.id === bookId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  }

  function clearCart() {
    setCartItems([]);
  }

  // Values calculated from the cart
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.book.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}