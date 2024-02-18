import "./Products.css";

function Products() {
  return (
    <div className="product-card">
      <div className="product-image">
        <img
          src="https://yemek.com/_next/image/?url=https%3A%2F%2Fcdn.yemek.com%2Fmnresize%2F1250%2F833%2Fuploads%2F2023%2F04%2Fsis-kebap-onecikan.jpg&w=1920&q=75"
          alt="image"
        />
      </div>
      <div className="product-info">
        <strong className="product-title">Kebap</strong>
        <span className="product-price">250₺</span>
      </div>
    </div>
  );
}

export default Products;
