import { SELECT_USER, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants.js';

const initialState = {
  allUsers: [],
  selectedUser: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_SUCCESS:
      let storage = {};
      for (let i of action.payload) {
        storage[i.id] = i;
      }
      return {
        ...state,
        allUsers: storage
      };
    case FETCH_USERS_FAILURE:
      return state;
    case SELECT_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    default:
      return state;
  }
}

