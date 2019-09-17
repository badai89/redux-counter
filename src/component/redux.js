import { createStore } from "redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1
      };
    case "DECREMENT":
      return state.count <= 0
        ? alert("salah")
        : {
            count: state.count - 1
          };
    default:
      return state;
  }
};

// ex
export const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
