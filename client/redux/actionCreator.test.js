import { fetchAllUsers, selectUser } from './actionCreator';
import { SELECT_USER, FETCH_USERS } from './constants.js';

describe('tests for action creators', () => {
  const text = 'hello world!'
  const expectedAction = (type, text) => (
    { type, payload: text }
  )

  it('fetchAllUsers', () => {
    expect(fetchAllUsers(text)).toEqual(expectedAction(FETCH_USERS, text));
  })

  it('selectUser', () => {
    expect(selectUser(text)).toEqual(expectedAction(SELECT_USER, text));
  })
})