//this function is called in componentDidMount when the data gets returned and
//is being sent to the store
import { SELECT_USER, FETCH_USERS } from './constants.js';

export const fetchAllUsers = (allUsers) => {
  return {
    type: FETCH_USERS,
    payload: allUsers
  }
};

//selectUser will be called with an onClick listener
export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user
  }
};