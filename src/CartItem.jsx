import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './CartSlice';
import './CartItem.css'; // optional for styling

function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalCost = items.reduce((total, item) => total + item.cost * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {items.map((item, idx) => (
            <div className="cart-item" key={idx}>
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>Price: ${item.cost * item.quantity}</span>
              <button onClick={() => dispatch(removeItem(item.name))}>Remove</button>
            </div>
          ))}
          <h2>Total: ${totalCost}</h2>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
      <button onClick={onContinueShopping}>Continue Shopping</button>
    </div>
  );
}

export default CartItem;
