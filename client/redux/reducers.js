const initialState = {
  allUsers: [],
  selectedUser: null
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_SUCCESS":
      let storage = {};
      for (let i of action.payload) {
        storage[i.id] = i;
      }
      return {
        allUsers: storage
      };
    case "FETCH_USERS_FAILURE":
      return state;
    case "SELECT_USER":
      return {
        allUsers: state.allUsers,
        selectedUser: action.payload
      };
    default:
      return state;
  }
}

