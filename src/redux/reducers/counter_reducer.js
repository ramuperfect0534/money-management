import {
  INCREMENT_BUTTON,
  DECREMENT_BUTTON,
  RESET_BUTTON,
} from "../actions/counter_actions";

export const counter_reducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT_BUTTON:
      return state + 1;

    case DECREMENT_BUTTON:
      return state - 1;

    case RESET_BUTTON:
      return state;

    default:
      return state;
  }
};
