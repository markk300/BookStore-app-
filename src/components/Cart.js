import React, { useState, useEffect } from "react";
import "../styles/Cart.css";

function Cart({ setCart, cart,handleChange }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const handleRemove =(id)=>{
const arr=cart.filter((item)=>item.id !== id);
setCart(arr)
  }
  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="images" />
            <p>{item.title}</p>
          </div>
          <div className="buttons">
            <button onClick={()=>handleChange(item, +1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={()=>handleChange(item, -1)}>-</button>
          </div>
          <div className="price">
            <span>{item.price}$</span>
            <button onClick={()=>handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of your card</span>
        <span> $ {price}</span>
      </div>
    </article>
  );
}

export default Cart;
