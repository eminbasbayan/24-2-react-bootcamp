// import Products from "../components/Products/Products";
// import { useLoaderData } from "react-router-dom";
import FirebaseProducts from "../components/Products/FirebaseProducts";

const ProductsPage = () => {
  // const data = useLoaderData();

  return (
    <div className="products-page">
      <h1 className="mb-4">Products Page</h1>
      {/* <Products products={data} /> */}
      <FirebaseProducts />
    </div>
  );
};

export default ProductsPage;
