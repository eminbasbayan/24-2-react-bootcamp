import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <main className="content pt-16">
        <h1 className="mb-4">Home Page</h1>
        <a href="/products">Go to Products Page with a tag</a>
        <br />
        <Link to={"/products"} >Go to Products Page with Link Component</Link>
      </main>
    </div>
  );
};

export default HomePage;
