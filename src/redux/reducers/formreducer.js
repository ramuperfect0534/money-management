const Form_reducer = (state = [], action) => {
  switch (action.type) {
    case "amount":
      return [...state, action.payload];
    case "deleteitem":
      return state.filter((res) =>
        action.payload !== res.sno ? [...state, res] : ""
      );
    default:
      return state;
  }
};
export default Form_reducer;
