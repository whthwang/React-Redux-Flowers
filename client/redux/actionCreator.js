//this function is called in componentDidMount when the data gets returned and
//is being sent to the store
export const fetchAllUsers = (allUsers) => {
  return {
    type: "FETCH_USERS",
    payload: allUsers
  }
};

//selectUser will be called with an onClick listener
export const selectUser = (user) => {
  return {
    type: "SELECT_USER",
    payload: user
  }
};