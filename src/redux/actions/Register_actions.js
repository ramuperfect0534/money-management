import Axios from "axios";
import { useNavigate } from "react-router-dom";
export const REGISTER_USER_INFO_REQUEST = "REGISTER_USER_INFO_REQUEST";
export const REGISTER_USER_INFO_SUCCESS = "REGISTER_USER_INFO_SUCCESS";
export const REGISTER_USER_INFO_FAILURE = "REGISTER_USER_INFO_FAILURE";

// export const registerUserRequest = () => {
//   return {
//     type: REGISTER_USER_INFO_REQUEST,
//   };
// };

// export const registerUserSuccess = (user) => {
//   return {
//     type: REGISTER_USER_INFO_SUCCESS,
//     payload: user,
//   };
// };

// export const registerUserError = (err) => {
//   return {
//     type: REGISTER_USER_INFO_FAILURE,
//     err,
//   };
// };

// export function RegisterUserInfo(data) {
//   const { employeeName, password, email, employeeId, phone, role } = data;

//   return (dispatch) => {
//     dispatch(registerUserRequest());
//     const requestBody = {
//       employeeName: employeeName,
//       password: password,
//       email: email,
//       employeeId: employeeId,
//       phoneNumber: phone,
//       role: role,
//     };

//     Axios.post(
//       "https://cors.bridged.cc/https://nueveapp.herokuapp.com/register",
//       requestBody
//     )
//       .then((res) => {
//         dispatch(registerUserSuccess(res.data));
//       })
//       .catch((err) => {
//         dispatch(registerUserError(err));
//       });
//   };
// }

export function RegisterUserInfo(data) {
  return {
    type: "Registration",
    payload: data,
  };
}
