import React, { useState } from 'react';

function Cart() {
  const [cart, setCart] = useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.name} - ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
