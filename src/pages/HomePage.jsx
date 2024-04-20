import BackwardCounter from "../components/Counter/BackwardCounter";
import ForwardCounter from "../components/Counter/ForwardCounter";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <div className="counters flex gap-5">
        <ForwardCounter />
        <BackwardCounter />
      </div>
    </div>
  );
};

export default HomePage;
