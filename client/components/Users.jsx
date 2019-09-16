import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Users extends Component {

  //when component renders, fetch all users from the db and send to redux store
  componentDidMount() {
    axios.get('/api/users')
      .then(({ data }) => {
        console.log('all users from db', data);
      })
      .catch((error) => {
        console.log(`axios get error: ${error}`);
      })
  };

  render() {
    return (
      <div>User list renders here</div>
    )
  };
};

const mapStateToProps = () => {

};

const mapDispatchToProps = () => {
  

};

export default Users;