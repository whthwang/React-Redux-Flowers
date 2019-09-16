import React, { Component } from 'react';
import axios from 'axios';

export class Users extends Component {

  //when component renders, fetch all users from the db and send to redux store
  componentDidMount() {
    axios.get('/api/users')
      .then((allUsers) => {
        console.log('all users from db', allUsers);
      })
      .catch((error) => {
        console.log(`axios get error: ${error}`);
      })
  }

  render() {
    return (
      <div>User list renders here</div>
    )
  }
};