import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const item = useSelector((state) => state);

  const total = item.cart.reduce((a, b) => a + b.price, 0);
  return (
    <>
      <div className=" bg-red-400 p-5 font-bold text-4xl text-white">
        <h3 className="  text-center">Total Items: {total} </h3>
      </div>
    </>
  );
}

export default Cart;
