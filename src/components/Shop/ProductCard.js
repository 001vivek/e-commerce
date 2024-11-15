import { Link } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";


const ProductCard = ({ product }) => {
  const { title, price, description, images } = product;
  return (
    <li className={classes.item}>
      <Card>
        <Link key={product.id} to={`/product/${product.id}`}>
          <header>
            <h3>{title}</h3>

            <div className={classes.price}>${price.toFixed(2)}</div>
          </header>

          <div>
                {images.map((image, index) => (
                  <img
                  style={{ height: "200px", width: "200px"} }
                    key={index}
                    src={image}
                    alt={`${title} - ${index + 1}`}
                  />
                ))}
             
          </div>

          <p>{description}</p>
        </Link>
      </Card>
    </li>
  );
};

export default ProductCard;
