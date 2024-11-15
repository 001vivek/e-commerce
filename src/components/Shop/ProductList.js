import { useEffect, useState } from "react";
import classes from "./Products.module.css";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </ul>
    </section>
  );
};

export default ProductLists;
