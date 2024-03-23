import { createStore } from "redux";

const initialState = {
  count: 11110,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "arttir":
      return { count: state.count + 1 };
    case "azalt":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

const store = createStore(counterReducer);

export default store;
