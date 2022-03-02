import { useEffect, useState } from "react";

const useProduuct = () => {
  const [products, setProduct] = useState([]);

  useEffect(
    () =>
      fetch("https://pacific-sierra-93970.herokuapp.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProduct(data?.cursor);
          //   setFilterProduct(data);
        }),

    []
  );

  return [products, setProduct];
};

export default useProduuct;
