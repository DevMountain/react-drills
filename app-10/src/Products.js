import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Products() {
    let [oldProducts, setProducts] = useState([]);

    axios.get("https://practiceapi.devmountain.com/products").then(response => {
        setProducts(response.data);
    });

    let newProducts = oldProducts.map((product, index) => {
        if (product.image) {
          return (
            <Link key={index} to={`/details/${product.id}`}>
              <img width="200" src={product.image} />
            </Link>
          );
        }
    })

    return (
      <div>
        <h1>Products</h1>
        {newProducts}
      </div>
    );
}

export default Products;