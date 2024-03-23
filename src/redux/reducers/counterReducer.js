const initialState = {
  count: 0,
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "arttir":
      return { count: state.count + 1 };
    case "azalt":
      if (state.count === 0) {
        return state;
      }
      return { count: state.count - 1 };

    default:
      return state;
  }
}

export default counterReducer;
