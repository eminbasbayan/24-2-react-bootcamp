import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import FormProduct from "./AddNewProduct/FormProduct.jsx";
import Spinner from "../UI/Spinner.jsx";
import "./Products.css";

const initialState = {
  title: "",
  price: "",
  img: "",
  category: "",
};

function Products() {
  const [productData, setProductData] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updatingProductId, setUpdatingProductId] = useState(null);
  const [productInput, setProductInput] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchData() {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://fantastic-tick-fez.cyclic.app/api/products/get-all"
      );
      const data = await res.json();
      setProductData(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("istek tamamlandı!");
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      {isLoading && <Spinner />}
      <div className="products-wrapper">
        {productData.map((pItem) => {
          return (
            <ProductItem
              key={pItem._id}
              productTitle={pItem.title}
              productImage={pItem.img}
              productPrice={pItem.price}
              item={pItem}
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
