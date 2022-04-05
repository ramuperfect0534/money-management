export const INCREMENT_BUTTON = "INCREMENT_BUTTON";

export const DECREMENT_BUTTON = "DECREMENT_BUTTON";
export const RESET_BUTTON = "RESET_BUTTON";

export function increment() {
  return {
    type: INCREMENT_BUTTON,
  };
}

export function decrement() {
  return {
    type: DECREMENT_BUTTON,
  };
}

export function reset() {
  return {
    type: RESET_BUTTON,
  };
}
