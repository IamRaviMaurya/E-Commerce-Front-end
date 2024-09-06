import React, { useContext } from "react";
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItem  = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cart-item">
      <div className="cart-item-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cart-item-format cart-item-format-main">
                <img src={e.image} alt="" className="cart-icon-product-icon" />
                <p>{e.name}</p>
                <p>
                  <i className="fa fa-inr"></i>
                  {e.new_price}
                </p>
                <p className="cart-item-quantity">
                  {cartItems[e.id]}
                </p>
                <p>{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        } else {
          return null;
        }
      })}
      <div className="cart-item-down">
        <div className="cart-item-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cart-item-total-item">
              <p>subtotal</p>
              <p><i className="fa fa-inr"></i>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-item-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-item-total-item">
              <h3>Total</h3>
              <h3><i className="fa fa-inr"></i>{getTotalCartAmount()}</h3>
            </div>
            <button>Proceed To Checkout</button>
          </div>
          <div className="cart-item-promo-code">
            <p>If you have promo code please enter here.</p>
            <div className="cart-item-promo-box">
              <input type="text" placeholder="Enter your promo code here." />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
