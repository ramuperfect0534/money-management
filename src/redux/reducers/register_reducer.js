// import {
//   REGISTER_USER_INFO_FAILURE,
//   REGISTER_USER_INFO_SUCCESS,
//   REGISTER_USER_INFO_REQUEST,
// } from "../actions/Register_actions";
// export const register_reducer = (state = {}, action) => {
//   //console.log(action.payload, "action");

//   switch (action.type) {
//     case REGISTER_USER_INFO_REQUEST:
//       return {
//         user: [],
//         loading: true,
//         err: null,
//       };
//     case REGISTER_USER_INFO_SUCCESS:
//       return {
//         user: action.payload,
//         loading: false,
//         err: null,
//       };

//     case REGISTER_USER_INFO_FAILURE:
//       return {
//         user: [],
//         loading: false,
//         err: action.err,
//       };

//     default:
//       return state;
//   }
// };

const Register_reducer = (state = [], action) => {
  switch (action.type) {
    case "Registration":
      return [...state, action.payload];

    default:
      return state;
  }
};
export default Register_reducer;
