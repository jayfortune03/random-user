import { FETCH_USERS, SET_FILTER } from "./actionType";

export function setUsers(payload) {
  return {
    type: FETCH_USERS,
    payload: payload,
  };
}

export function setFilter(payload) {
  return {
    type: SET_FILTER,
    payload: payload,
  };
}

export function fetchUsers() {
  return async function (dispatch, getState) {
    try {
      const response = await fetch("https://randomuser.me/api/?results=20");
      const data = await response.json();

      dispatch(setUsers(data));
    } catch (err) {
      console.log(err);
    }
  };
}
