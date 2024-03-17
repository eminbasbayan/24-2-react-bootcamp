import { useReducer } from "react";

function reducerFunc(state, action) {
  if (action.type === "arttir") {
    return { ...state, counter: state.counter + 1 };
  } else if (action.type === "azalt") {
    if (state.counter === 0) {
      return state;
    }
    return { ...state, counter: state.counter - 1 };
  }
  return { ...state };
}

const initialState = {
  counter: 0,
  name: "Emin",
};

function Counter() {
  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <div>
      <p>{state.name}</p>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "arttir" })}>Arttır</button>
      <button onClick={() => dispatch({ type: "azalt" })}>Azalt</button>
    </div>
  );
}

export default Counter;
