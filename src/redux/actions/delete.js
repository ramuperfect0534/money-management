const Delete = (sno) => {
  return {
    type: "deleteitem",
    payload: sno,
  };
};
export default Delete;
