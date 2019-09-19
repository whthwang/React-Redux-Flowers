import { SELECT_USER, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './constants.js';
import { userReducer } from './reducers';

describe('userReducer', () => {

  const initialState = {
    allUsers: {},
    selectedUser: null
  };

  it('should return the initial state with invalid action type', () => {
    expect(userReducer(initialState, { type: 'NO_MATCHING_ACTION' }))
      .toEqual(initialState);
  })

  it('should return the initial state if GET call was unsuccessful', () => {
    expect(userReducer(initialState, { type: FETCH_USERS_FAILURE }))
      .toEqual(initialState);
  })

  it('SELECT_USER should carry a payload of a user object with an id', () => {
    // const returnedObject = expect(userReducer(initialState, { type: SELECT_USER, payload: { id: 1 } }));
    expect(userReducer(initialState, { type: SELECT_USER, payload: { id: 1 } }))
      .toHaveProperty('id');
  })
})