const initialState = {
  allUsers: [],
  selectedUser: null
}

//since there is only one reducer, there is no need to call combineReducer
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        allUsers: [...action.payload]
      };
    case "SELECT_USER":
      return {
        selectedUser: action.payload
      };
    default:
      return state;
  }
}

