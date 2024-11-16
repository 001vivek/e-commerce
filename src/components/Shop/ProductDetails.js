import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import Card from "../UI/Card";
import { cartActions } from "../../store/cart-slice";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  console.log("products::", product);

 const addToCartHandler=(product)=>{
   dispatch(cartActions.addToCart(product))
 }
  return (
    <div>
      <Card>
        {product.images.map((image, index) => (
                  <img
                  style={{ height: "200px", width: "200px"} }
                    key={index}
                    src={image}
                    alt={`detail`}
                  />
                ))}
             
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <button 
        onClick={() => addToCartHandler(product)}
        >Add to Cart</button>
      </Card>
    </div>
  );
};

export default ProductDetails;
