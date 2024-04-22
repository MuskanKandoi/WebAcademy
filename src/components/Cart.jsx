import { useState } from 'react';
import emptyCartIcon from "../assets/img/emptyCartIcon.svg";

function Cart({ cart, removeFromCart, changeQuantity }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    // Place your order logic here
    // For demonstration purposes, I'm just setting orderPlaced to true
    setOrderPlaced(true);
    // You can add more logic here, like sending data to a server, etc.
    // Show alert message
    alert('Order placed successfully!');
  };

  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <img src={emptyCartIcon} alt="" />
        </div>
      ) : (
        <>
          <div className="cart">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-info">
                  <img src={item.img} alt="" />
                  <div className="cart-item-description">
                    <p>
                      <b>{item.title}</b>
                    </p>
                  </div>
                </div>
                <i>Total: $ {item.totPrice.toFixed(2)}</i>

                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  max="20"
                  onChange={(event) =>
                    changeQuantity(cart, item.id, event, item.price)
                  }
                />

                <button onClick={() => removeFromCart(cart, item.id)}>
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="checkout-info">
            <p>
              Subtotal: ${" "}
              {cart
                .reduce((acc, item) => {
                  return (acc += item.totPrice);
                }, 0)
                .toFixed(2)}
            </p>
            <button className="checkOut" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Cart;
