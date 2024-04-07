import Products from "../components/Products/Products";
import { useLoaderData } from "react-router-dom";

const ProductsPage = () => {
  const data = useLoaderData();

  return (
    <div className="products-page">
      <h1 className="mb-4">Products Page</h1>
      <Products products={data} />
    </div>
  );
};

export default ProductsPage;
