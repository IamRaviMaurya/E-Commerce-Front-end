import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalCartAmount = 0;
    
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let productItem = all_product.find(
          (product) => product.id === Number(itemId) // itemId is the product ID
        );
        
        if (productItem) {
          totalCartAmount += productItem.new_price * cartItems[itemId];
        }
      }
    }
    return totalCartAmount;
  };

  const getTotalCartItem = () =>{
    let totalCartItem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0){
        totalCartItem += cartItems[itemId];
      }
    }
    console.log(totalCartItem);
    return totalCartItem;
  };
  
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
