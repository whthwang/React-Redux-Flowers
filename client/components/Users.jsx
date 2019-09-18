import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchAllUsers, selectUser } from '../redux/actionCreator.js';
import UserDetails from './UserDetails.jsx';
import { select } from 'redux-saga/effects';

class Users extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  //when component renders, fetch all users from the db and send to redux store
  componentDidMount() {
    this.props.fetchAll();
  };

  //when a user div is clicked, send the selected user to the redux store, then
  //the redux store is gonna send back just the user information for that user
  handleSelect(e) {
    const { selectUser, allUsers } = this.props;
    let person = allUsers[e.target.id];
    selectUser(person);
  }

  //in the mapping function, deciding to use set the key to index instead of id
  //because this can allow for constant lookup when selecting a user
  render() {
    let userArray = Object.values(this.props.allUsers);
    return (
      <div>
        {userArray ? userArray.map((user) => {
          return (
            <div>
              <div key={user.id} onClick={this.handleSelect}>
                <h1 className='names' id={user.id}>{user.first} {user.last}</h1>
              </div>
            </div>
          )
        }) : <div>allUsers is undefined</div>}
      </div>
    )
  };
};


const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
    selectedUser: state.selectedUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch({ type: 'FETCH_USERS' }),
    selectUser: (person) => dispatch({ type: 'SELECT_USER', payload: person })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);