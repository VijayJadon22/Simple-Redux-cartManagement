import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalQuantity =
    cartItems?.reduce((number, item) => (number += item.quantity), 0) || 0;
  const totalAmount = cartItems?.reduce(
    (total, item) => (total += item.price * item.quantity),
    0
  );
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen p-8">
      <h1 className="font-bold text-3xl mt-4 mb-8">Cart</h1>
      <h2>Quanity: {totalQuantity}</h2>
      <h2>Price: {totalAmount}</h2>
      <div className="md:w-xl lg:w-4xl space-y-4 flex flex-col">
        {cartItems &&
          cartItems.map((item) => (
            <div className="flex" key={item.id}>
              <img src={item.image} alt="item_image" className="w-20" />
              <p>{item.title}</p>
              <span onClick={() => dispatch(addToCart(item))}>+</span>
              <p>Quantity: {item.quantity}</p>
              <span onClick={() => dispatch(removeFromCart(item))}>-</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartPage;
