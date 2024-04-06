import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <a href="/products">Go to Products Page with a tag</a>
      <br />
      <Link to={"/products"}>Go to Products Page with Link Component</Link>
    </div>
  );
};

export default HomePage;
