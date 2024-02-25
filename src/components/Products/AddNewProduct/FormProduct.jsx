import { useState } from "react";
import ProductFormItem from "./ProductFormItem";
import formFields from "../../../data/Products/AddProductFormData.json";

function FormProduct() {
  const [productInput, setProductInput] = useState({
    title: "",
    price: "",
    imgLink: "",
  });

  function handleChange({ target: { name, value } }) {
    setProductInput({
      ...productInput,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productItem = productInput;
    console.log(productItem);
  }

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
