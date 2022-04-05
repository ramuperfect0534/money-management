import Axios from "axios";
export const GET_USER_INFO_REQUEST = "GET_USER_INFO_REQUEST";
export const GET_USER_INFO_SUCCESS = "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_FAILURE = "GET_USER_INFO_FAILURE";

export const userRequest = () => {
  return {
    type: GET_USER_INFO_REQUEST,
  };
};

export const userSuccess = (user) => {
    console.log("user123",user)
  return {
    type: GET_USER_INFO_SUCCESS,
    payload:user
  };
};

export const userError = (err) => {
  return {
    type: GET_USER_INFO_FAILURE,
    err,
  };
};

export function getUserInfo() {
  return (dispatch) => {
    dispatch(userRequest());
    Axios.get("https://jsonplaceholder.typicode.com/users")
      //.then(res=>res.json())
      .then((res) => {
        console.log("res1233", res);
        dispatch(userSuccess(res.data));
      })
      .catch((err) => {
        dispatch(userError(err));
      });
  };
}
