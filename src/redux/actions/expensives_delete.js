export const DELETE_LIST = "DELETE_LIST";

export function DeleteList(index) {
  return {
    type: DELETE_LIST,
    payload: index,
  };
}
