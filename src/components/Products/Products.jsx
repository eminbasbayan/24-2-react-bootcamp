import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import FormProduct from "./AddNewProduct/FormProduct.jsx";
import Spinner from "../UI/Spinner.jsx";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux-toolkit/slices/productSlice.js";

const initialState = {
  title: "",
  price: "",
  img: "",
  category: "",
};

function Products({ products }) {
  const [productData, setProductData] = useState([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updatingProductId, setUpdatingProductId] = useState(null);
  const [productInput, setProductInput] = useState(initialState);
  const status = useSelector((state) => state.product.status);
  // const products = useSelector((state) => state.product.productData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

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
      {status === "loading" && <Spinner />}
      <div className="products-wrapper">
        {products.map((pItem) => {
          return (
            <ProductItem
              key={pItem.id}
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
