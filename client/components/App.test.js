import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import UserDetails from './UserDetails';
import Users from './Users';
import axios from 'axios';

//import below for axios test
import "regenerator-runtime/runtime";

describe('Test for React components', () => {
  it('expect UserDetails component to render', () => {
    expect(shallow(<UserDetails />).length).toEqual(1);
  });
});

describe('Tests for snapshots', () => {

  it('expect UserDetails component to match snapshot', () => {
    expect(shallow(<UserDetails />)).toMatchSnapshot();
  });

  it('expect Users component to match snapshot', () => {
    let mockUsers = [
      {
        id: 1,
        first: "Wayne",
        last: "Hwang",
      },
      {
        id: 2,
        first: "Jules",
        last: "Yap"
      },
      {
        id: 3,
        first: "Kyle",
        last: "Maningding"
      }
    ];
    expect(shallow(<Users allUsers={mockUsers} />)).toMatchSnapshot();
  });
  
});

describe('Backend Tests', () => {
  it('Should return 3 users in the database', () => {
    expect.assertions(1);
    axios.get('localhost:3000/api/users')
      .then(({ data }) => {
        expect(data.length).toEqual(3);
      })
      .catch(() => { });
  });
});