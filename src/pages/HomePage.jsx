import useFetchData from "../hooks/FetchData";

const HomePage = () => {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
  } = useFetchData("https://fakestoreapi.com/products");

  const { data: todos, loading: todosLoading, todosError } = useFetchData("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="home-page">
      <h1 className="mb-4">Home Page</h1>
      <h2 className="text-4xl">Products</h2>
      {productsLoading && <b>Yükleniyor...</b>}
      {products.map((item) => {
        return <p key={item.id}> {item.title} </p>;
      })}
      {productsError && <p>Error loading data!</p>}
      <h2 className="text-4xl">Todos</h2>
      {todosLoading && <b>Yükleniyor...</b>}
      {todos.map((item) => {
        return <p key={item.id}> {item.title} </p>;
      })}
      {todosError && <p>Error loading data!</p>}
    </div>
  );
};

export default HomePage;
