import React from "react";

const SellectedProduct = (props) => {
  const { name, price, seller, stock, key } = props.product;
  const { handler } = props;
  //   console.log(handler);
  //   console.log(product);

  return (
    <div className="card">
      <div className="cardData">
        <h2>{name}</h2>
        <h2> price: {price}</h2>
        <p>seller: {seller}</p>
        <p>stock: {stock}</p>

        {/* <Rating initialRating={3} readonly /> */}
        <button onClick={() => handler(key)} className="reg-btn">
          remove{" "}
        </button>
      </div>
    </div>
  );
};

export default SellectedProduct;
