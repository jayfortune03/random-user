import { FETCH_USERS, SET_FILTER } from "./actionType";

const initialState = {
  users: [],
  filterName: "",
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}
