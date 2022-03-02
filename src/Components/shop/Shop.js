import React, { useEffect, useState } from "react";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import useProduuct from "../../Hooks/UseProduct";
import { Link } from "react-router-dom";
const Shop = () => {
  // const [products, setProduct] = useState([]);

  // console.log(products);
  const [products, setProduct] = useProduuct();
  const [chooseProduct, setChooseProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState(0);
  const size = 10;
  console.log(filterProduct);
  useEffect(
    () =>
      fetch(
        `https://pacific-sierra-93970.herokuapp.com/products?page=${page}&&size=${size} `
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setProduct(data?.cursor);
          setFilterProduct(data?.cursor);
          const count = data.count;
          const pages = Math.ceil(count / size);
          setPageNumber(pages);
        }),

    [page, setProduct]
  );

  useEffect(() => {
    if (products.length) {
      const product = getStoredCart();
      const selectProduct = [];
      for (const key in product) {
        // const quantity = product[key];
        // product.quantity = quantity;
        const item = products.find((sellProduct) => sellProduct.key === key);
        // console.log(product[key]);
        // if (item) {
        const quantity = product[key];
        item.quantity = quantity;
        selectProduct.push(item);
      }
      // }
      setChooseProduct(selectProduct);
    }
  }, [products]);

  // item choose handler
  const evenHandler = (product) => {
    const exist = chooseProduct.find((pd) => pd.key === product.key);

    let newProduct = [];
    if (exist) {
      const remainCart = chooseProduct.filter(
        (myproduct) => myproduct !== exist
      );
      exist.quantity += 1;
      newProduct = [...remainCart, product];
    } else {
      product.quantity = 1;
      newProduct = [...chooseProduct, product];
    }

    setChooseProduct(newProduct);

    addToDb(product.key);
  };

  const handleInput = (event) => {
    const Search = event.target.value.toLowerCase();
    const MatchedProduct = products.filter((MatchProduct) =>
      MatchProduct.name.toLowerCase().includes(Search)
    );
    setFilterProduct(MatchedProduct);
  };

  const Definedpage = (e) => {
    setPage(e);
  };
  return (
    <div>
      <div className="field">
        <input
          onChange={handleInput}
          type="text"
          placeholder="Search your product"
        />
      </div>
      <div className="container">
        <div className="shop_Container">
          {filterProduct.map((product) => (
            <Product data={product} hanler={evenHandler} key={product._id} />
          ))}

          <div className="pagination">
            {[...Array(pageNumber).keys()].map((n) => (
              <div>
                {" "}
                <button
                  key={n}
                  className={page === n ? "page" : ""}
                  onClick={() => Definedpage(n)}
                >
                  {n + 1}
                </button>{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="Summery_Container">
          <Cart product={chooseProduct}>
            <Link to={"/order"}>
              {" "}
              <button className="place-order-btn"> review items </button>{" "}
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
