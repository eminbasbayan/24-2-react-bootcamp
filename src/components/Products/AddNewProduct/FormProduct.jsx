import { useState } from "react";

function FormProduct() {
  const [productInput, setProductInput] = useState({
    title: "",
    price: "",
    imgLink: "",
  });

  //   const [title, setTitle] = useState("");
  //   const [price, setPrice] = useState("");
  //   const [imgLink, setImgLink] = useState("");

  function handleTitleChange(e) {
    setProductInput({
      ...productInput,
      title: e.target.value,
    });
  }

  function handlePriceChange(e) {
    setProductInput({
      ...productInput,
      price: e.target.value,
    });
  }

  function handleImageChange(e) {
    setProductInput({
      ...productInput,
      imgLink: e.target.value,
    });
  }

  console.log(productInput.title);
  console.log(productInput.price);
  console.log(productInput.imgLink);

  return (
    <form className="form-product bg-purple-600 p-4 border w-[400px] mb-10 rounded-lg">
      <h3 className="text-3xl font-bold mb-2">Yeni Ürün Ekle!</h3>
      <div className="form-item-wrapper flex flex-col gap-y-2">
        <div className="form-item">
          <label className="inline-flex flex-col">
            <strong className="text-black !text-[#ccc]">Product Title</strong>
            <input
              type="text"
              placeholder="Bir ürün adı giriniz..."
              className="p-1 rounded"
              onChange={handleTitleChange}
            />
          </label>
        </div>
        <div className="form-item">
          <label className="inline-flex flex-col">
            <strong className="text-black !text-[#ccc]">Product Price</strong>
            <input
              type="text"
              placeholder="Bir ürün fiyatı giriniz..."
              className="p-1 rounded"
              onChange={handlePriceChange}
            />
          </label>
        </div>
        <div className="form-item">
          <label className="inline-flex flex-col">
            <strong className="text-black !text-[#ccc]">Product Image</strong>
            <input
              type="text"
              placeholder="Bir ürün görsel linki giriniz..."
              className="p-1 rounded"
              onChange={handleImageChange}
            />
          </label>
        </div>
      </div>
      <button className="mt-2 w-48">Ekle</button>
    </form>
  );
}

export default FormProduct;
