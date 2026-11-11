import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../styles/Cart.css";

function Cart() {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  if (cartItems.length === 0) {
    return (
      <div className="page">
        <h1 className="page-title">Your Cart</h1>
        <p className="empty-cart">Your cart is empty.</p>
        <Link to="/" className="back-link">← Browse books</Link>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Your Cart</h1>

      {cartItems.map((item) => (
        <CartItem key={item.book.id} item={item} />
      ))}

      <div className="cart-summary">
        <button className="clear-btn" onClick={clearCart}>
          Clear cart
        </button>
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
      </div>
    </div>
  );
}

export default Cart;