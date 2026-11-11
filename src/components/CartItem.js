import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/CartItem.css";

function CartItem({ item }) {
  const { removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(CartContext);

  const { book, quantity } = item;

  return (
    <div className="cart-item">
      <img src={book.cover} alt={book.title} />

      <div className="cart-item-info">
        <h3>{book.title}</h3>
        <p className="cart-item-author">{book.author}</p>
        <p>${book.price.toFixed(2)}</p>
      </div>

      <div className="quantity-control">
        <button onClick={() => decreaseQuantity(book.id)}>−</button>
        <span>{quantity}</span>
        <button onClick={() => increaseQuantity(book.id)}>+</button>
      </div>

      <p className="cart-item-total">
        ${(book.price * quantity).toFixed(2)}
      </p>

      <button className="remove-btn" onClick={() => removeFromCart(book.id)}>
        ✕
      </button>
    </div>
  );
}

export default CartItem;