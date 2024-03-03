import ProductItem from "./ProductItem";
import { productsData } from "../../get-all.js";
import "./Products.css";
import { useState } from "react";
import FormProduct from "./AddNewProduct/FormProduct.jsx";

const initialState = {
  title: "",
  price: "",
  img: "",
  category: "",
};

function Products() {
  const [productData, setProductData] = useState(productsData);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updatingProductId, setUpdatingProductId] = useState(null);
  const [productInput, setProductInput] = useState(initialState);

  function handleDeleteItem(id) {
    const allProducts = productData;

    const filteredProduct = allProducts.filter(({ _id }) => _id !== id);
    setProductData(filteredProduct);
  }

  function handleUpdateClick(productId) {
    setIsUpdateMode(true);
    setUpdatingProductId(productId);
    const productToBeUpdated = productData.find(
      (product) => product._id === productId
    );
    setProductInput({
      title: productToBeUpdated.title,
      price: String(productToBeUpdated.price),
      img: productToBeUpdated.img,
      category: productToBeUpdated.category,
    });
  }

  function resetForm() {
    setIsUpdateMode(false);
    setProductInput(initialState);
    setUpdatingProductId(null);
  }

  return (
    <div className="products-container">
      <FormProduct
        productData={productData}
        setProductData={setProductData}
        isUpdateMode={isUpdateMode}
        productInput={productInput}
        setProductInput={setProductInput}
        updatingProductId={updatingProductId}
        resetForm={resetForm}
        initialState={initialState}
      />
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
              setIsUpdateMode={setIsUpdateMode}
              handleUpdateClick={handleUpdateClick}
              {...pItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
