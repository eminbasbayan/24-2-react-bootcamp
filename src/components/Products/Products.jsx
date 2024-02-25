import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";
import "./Products.css";
import { useState } from "react";
import FormProduct from "./AddNewProduct/FormProduct.jsx";

function Products() {
  const [parentTitle, setParentTitle] = useState("Elma");
  const [productData, setProductData] = useState(productsData);

  return (
    <div className="products-container">
      <FormProduct productData={productData} setProductData={setProductData} />
      <div className="products-wrapper">
        {productData.map((pItem) => {
          return (
            <ProductItem
              key={pItem._id}
              productTitle={pItem.title}
              productImage={pItem.img}
              productPrice={pItem.price}
              category={pItem.category}
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
