import ProductItem from "./ProductItem";
import "./Products.css";

function Products() {
  return (
    <div className="products-wrapper">
      <ProductItem
        productTitle={"Kebap"}
        productImage={
          "https://images-ext-1.discordapp.net/external/j61-PsQQwxAfTcrSI4C7b1Sl-LfkxHKyHeBlSo_zwJ0/%3Furl%3Dhttps%253A%252F%252Fcdn.yemek.com%252Fmnresize%252F1250%252F833%252Fuploads%252F2023%252F04%252Fsis-kebap-onecikan.jpg%26w%3D1920%26q%3D75/https/yemek.com/_next/image/?format=webp&width=1007&height=671"
        }
        productPrice={250}
      />
    </div>
  );
}

export default Products;
