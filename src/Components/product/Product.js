import "./Product.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { name, seller, star, stock, img, price, shiping } = props.data;
  //   console.log(props);

  const cart = <FontAwesomeIcon icon={faShoppingBag} />;
  return (
    <div className="card">
      <div>
        <img src={img} alt="product" />
      </div>
      <div className="cardData">
        <h2>{name}</h2>
        <h2> price: {price}</h2>
        <p>seller: {seller}</p>
        <p>stock: {stock}</p>

        {/* <Rating initialRating={3} readonly /> */}
        <button onClick={() => props?.hanler(props.data)} className="reg-btn">
          <span className="icon">{cart}</span>
          ADD To Card{" "}
        </button>
      </div>
    </div>
  );
};

export default Product;
