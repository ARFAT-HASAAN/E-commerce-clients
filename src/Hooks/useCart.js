import React, { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products) => {
  const [chooseProduct, setChooseProduct] = useState([]);

  useEffect(() => {
    if (products.length) {
      const product = getStoredCart();
      const selectProduct = [];
      for (const key in product) {
        // const quantity = product[key];
        // product.quantity = quantity;
        const item = products.find((sellProduct) => sellProduct.key == key);
        // console.log(product[key]);
        const quantity = product[key];
        item.quantity = quantity;
        selectProduct.push(item);
      }
      setChooseProduct(selectProduct);
    }
  }, [products]);

  return [chooseProduct, setChooseProduct];
};

export default useCart;
