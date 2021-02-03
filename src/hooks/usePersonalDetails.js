import { useReducer } from "react";

export default function usePersonalDetails() {
  let [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }, {});

  return [state, dispatch];
}
