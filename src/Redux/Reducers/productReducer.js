import { ActionTypes } from "../Constants/action_types";

const initialState = {
  products: [{ id: 1, title: "Hello", category: "general" }],
};

export const productReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
    default:
      return state;
  }
};
