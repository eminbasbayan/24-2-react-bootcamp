import { useState } from "react";
import ProductFormItem from "./ProductFormItem";
import formFields from "../../../data/Products/AddProductFormData.json";

import PropTypes from "prop-types";

function FormProduct({ productData, setProductData }) {
  const [productInput, setProductInput] = useState({
    label: "",
    price: "",
    imgLink: "",
    category: "",
  });

  function handleChange({ target: { name, value } }) {
    setProductInput({
      ...productInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const isFormValid = Object.values(productInput).every(
      (value) => value.trim() !== ""
    );

    if (!isFormValid) {
      console.error("Tüm alanlar dolu ve boş karakter içermemelidir.");
      return;
    }

    // if (
    //   !productInput.label.trim() ||
    //   !productInput.price.trim() ||
    //   !productInput.imgLink.trim() ||
    //   !productInput.category.trim()
    // ) {
    //   console.error("Tüm alanlar dolu ve boş karakter içermemelidir.");
    //   return;
    // }

    const newProductInput = {
      _id: productData.length + 1,
      ...productInput,
      img: productInput.imgLink,
      price: Number(productInput.price),
    };
    setProductData([newProductInput, ...productData]);
  }

  console.log(productInput);

  return (
    <form
      className="form-product bg-purple-600 p-4 border w-[400px] mb-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-bold mb-2">Yeni Ürün Ekle!</h3>
      <div className="form-item-wrapper flex flex-col gap-y-2">
        {formFields.productFormData.map((field) => (
          <ProductFormItem
            key={field.name}
            onChange={handleChange}
            {...field}
          />
        ))}
      </div>
      <button className="mt-2 w-48">Ekle</button>
    </form>
  );
}

export default FormProduct;

FormProduct.propTypes = {
  productData: PropTypes.array,
  setProductData: PropTypes.func,
};
