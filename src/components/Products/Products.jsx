import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";
import "./Products.css";
import { useState } from "react";
import FormProduct from "./AddNewProduct/FormProduct.jsx";

function Products() {
  const [parentTitle, setParentTitle] = useState("Elma");

  return (
    <div className="products-container">
      <FormProduct />
      <div className="products-wrapper">
        {productsData.map((pItem) => {
          return (
            <ProductItem
              key={pItem._id}
              productTitle={pItem.title}
              productImage={pItem.img}
              productPrice={pItem.price}
              parentTitle={parentTitle}
              setParentTitle={setParentTitle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
