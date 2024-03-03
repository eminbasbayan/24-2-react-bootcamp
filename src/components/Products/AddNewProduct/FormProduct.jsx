import { useState } from "react";
import ProductFormItem from "./ProductFormItem";
import formFields from "../../../data/Products/AddProductFormData.json";

import PropTypes from "prop-types";
import ErrorModal from "../../UI/ErrorModal";

function FormProduct({
  productData,
  setProductData,
  isUpdateMode,
  productInput,
  setProductInput,
  initialState,
  updatingProductId,
}) {
  const [isShowError, setIsShowError] = useState(false);

  function handleChange({ target: { name, value } }) {
    setProductInput({
      ...productInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(productInput);
    const isFormValid = Object.values(productInput).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.error("Tüm alanlar dolu ve boş karakter içermemelidir.");
      setIsShowError(true);
      return;
    }

    if (isUpdateMode) {
      // Ürün Güncelleme
      const updatedProduct = productData.map((product) => {
        if (product._id === updatingProductId) {
          return { ...product, ...productInput };
        } else {
          return product;
        }
      });

      setProductData(updatedProduct);
    } else {
      // Yeni Ürün Ekle
      const newProductInput = {
        _id: String(productData.length + 1),
        ...productInput,
        img: productInput.imgLink,
        price: Number(productInput.price),
        category: productInput.category,
      };
      // setProductData([newProductInput, ...productData]);
      setProductData((prevState) => [newProductInput, ...prevState]);
      setProductInput(initialState);
    }
  }

  return (
    <form
      className="form-product bg-purple-600 p-4 border w-[400px] mb-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-bold mb-2">
        {isUpdateMode ? "Ürünü Güncelle" : "Yeni Ürün Ekle!"}{" "}
      </h3>
      <div className="form-item-wrapper flex flex-col gap-y-2">
        {formFields.productFormData.map((field) => (
          <ProductFormItem
            key={field.name}
            onChange={handleChange}
            value={productInput[field.name]}
            {...field}
          />
        ))}
      </div>
      {isUpdateMode ? (
        <button className="mt-2 w-48 bg-green-500">Güncelle</button>
      ) : (
        <button className="mt-2 w-48">Ekle</button>
      )}

      <ErrorModal
        isShowError={isShowError}
        setIsShowError={setIsShowError}
        message="Tüm alanlar dolu ve boş karakter içermemelidir."
      />
    </form>
  );
}

export default FormProduct;

FormProduct.propTypes = {
  productData: PropTypes.array,
  setProductData: PropTypes.func,
  isUpdateMode: PropTypes.bool,
  productInput: PropTypes.object,
  setProductInput: PropTypes.func,
  initialState: PropTypes.object,
  updatingProductId: PropTypes.string,
};
