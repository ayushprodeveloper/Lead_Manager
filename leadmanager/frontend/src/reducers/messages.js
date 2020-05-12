import { GET_MESSAGES, CREATE_MESSAGES } from "../action/types";

const intialState = {};

export default function (state = intialState, action) {
  switch (action.type) {
    case CREATE_MESSAGES:
      return (state = action.payload);
    default:
      return state;
  }
}
