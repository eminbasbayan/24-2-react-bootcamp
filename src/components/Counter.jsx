import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "arttir" })}>Arttır</button>
      <button onClick={() => dispatch({ type: "azalt" })}>Azalt</button>
    </div>
  );
}

export default Counter;
