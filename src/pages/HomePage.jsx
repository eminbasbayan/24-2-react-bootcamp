import { Link } from "react-router-dom";
import Header from "../components/Layout/Header";

const HomePage = () => {
  return (
    <div className="home-page">
        <Header />
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
