import {
  GET_USER_INFO_FAILURE,
  GET_USER_INFO_SUCCESS,
  GET_USER_INFO_REQUEST,
} from "../actions/User_actions";

export const user_reducer = (state = {}, action) => {
  //console.log(action.payload,"action")

  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        user: [],
        loading: true,
        err: null,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        user: action.payload,
        loading: false,
        err: null,
      };

    case GET_USER_INFO_FAILURE:
      return {
        user: [],
        loading: false,
        err: action.err,
      };

    default:
      return state;
  }
};
