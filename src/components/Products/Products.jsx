import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";
import "./Products.css";
import { useState } from "react";
import FormProduct from "./AddNewProduct/FormProduct.jsx";

function Products() {
  const [productData, setProductData] = useState(productsData);

  function handleDeleteItem(id) {
    const allProducts = productData;

    const filteredProduct = allProducts.filter(({ _id }) => _id !== id);
    setProductData(filteredProduct);
  }

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
              handleDeleteItem={handleDeleteItem}
              {...pItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
