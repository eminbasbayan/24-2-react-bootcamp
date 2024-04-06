import Header from "../components/Layout/Header";
import Products from "../components/Products/Products";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <Header />
      <main className="content pt-16">
        <h1 className="mb-4">Products Page</h1>
        <Products />
      </main>
    </div>
  );
};

export default ProductsPage;
