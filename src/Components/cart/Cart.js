import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = (props) => {
  const { product } = props;

  let quantity = 0;
  let TotalPrice = 0;
  for (const item of product) {
    if (!item.quantity) {
      item.quantity = 1;
    }

    quantity += item.quantity;
    TotalPrice += item.price * item.quantity;
  }

  const totalAmout = Number(TotalPrice.toFixed(2));
  // console.log(totalAmout);

  const shiping = totalAmout > 0 ? 15 : 0;
  const tax = Number(((totalAmout + shiping) * 0.1).toFixed(2));
  // console.log(totalAmout, shiping, tax);
  const GrandToal = totalAmout + shiping + tax;
  return (
    <div>
      <h2 className="hed">Order summery</h2>
      <h2>items ordered:{quantity}</h2>
      <h2>total:{totalAmout}</h2>
      <h2>Shiping Cost:{shiping}</h2>
      <h2>tax:{tax}</h2>
      <h2>Grand Total: {GrandToal}</h2>
      {props.children}
    </div>
  );
};

export default Cart;
