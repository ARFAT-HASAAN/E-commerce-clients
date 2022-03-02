import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useProduuct from "../../Hooks/UseProduct";
import { clearTheCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../cart/Cart";
import SellectedProduct from "./SellectedProduct";

const OrderReview = () => {
  const [products] = useProduuct();
  const [chooseProduct, setChooseProduct] = useCart(products);
  const history = useHistory();
  //   console.log(products);
  //   console.log(chooseProduct);

  const removeHandler = (key) => {
    const newProducts = chooseProduct.filter((product) => product.key !== key);
    setChooseProduct(newProducts);
    removeFromDb(key);
    // console.log(key);
  };

  const placeorder = () => {
    history.push("/shipment");
    clearTheCart();
    setChooseProduct([]);
  };

  return (
    <div className="container">
      <div className="shop_Container">
        {chooseProduct.map((products) => (
          <SellectedProduct
            handler={removeHandler}
            product={products}
            key={products.key}
          />
        ))}
      </div>
      <div className="Summery_Container">
        <Cart product={chooseProduct}>
          <button onClick={placeorder} className="place-order-btn">
            {" "}
            proced to shiping
          </button>{" "}
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
