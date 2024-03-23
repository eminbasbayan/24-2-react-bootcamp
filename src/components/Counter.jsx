import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt } from "../redux/actions/counterActions";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch(arttir())}>Arttır</button>
      <button onClick={() => dispatch(azalt())}>Azalt</button>
    </div>
  );
}

export default Counter;
