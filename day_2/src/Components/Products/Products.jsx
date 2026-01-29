import React, { useEffect, useState } from "react";
import Product_Item from "./Product_Item";
import "./Product_item.css";

const initialState = true;

function Products({ name, City, refno, ProductDetail = [] }) {
  const [flag, setFlag] = useState(initialState);
  const [count, setCount] = useState(0);
  const [styles, setStyles] = useState(true);

  function handleToggleText() {
    setFlag((prev) => !prev);
  }

  useEffect(() => {
    if (count === 10) {
      setStyles(false);
    }
  }, [count]);

  return (
    <div>
      {flag ? (
        <h4>
          {name} and {City}
        </h4>
      ) : (
        <h4>Hello</h4>
      )}

      <button onClick={handleToggleText}>Toggle Text</button>

      <p>the count is: {count}</p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        className={styles ? "btn_color" : "btn_color_2"}
      >
        Add count
      </button>

      <br />

      {ProductDetail.map((item, index) => (
        <Product_Item Product_name={item} key={index} />
      ))}
    </div>
  );
}

export default Products;
