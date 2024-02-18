import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      {productsData.map((pItem) => {
        return (
          <ProductItem
            key={pItem._id}
            productTitle={pItem.title}
            productImage={pItem.img}
            productPrice={pItem.price}
          />
        );
      })}
    </div>
  );
}

export default Products;
