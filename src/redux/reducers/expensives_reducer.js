import { ADD_BUTTON } from "../actions/expensives_action";
import { DELETE_LIST } from "../actions/expensives_delete";

const expensive_Reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUTTON:
      return [...state, action.payload];
    case DELETE_LIST:
      return state.filter((data) => data.index !== action.payload);

    default:
      return state;
  }
};

export default expensive_Reducer;
