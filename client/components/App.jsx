import React from 'react';
import { connect } from 'react-redux';
import Users from './Users.jsx';
import UserDetails from './UserDetails.jsx';

const App = (props) => {
  console.log('props.allUsers', props.allUsers);
  return (
    <div className='app'>
      <div>
        <Users />
      </div>
      <div className='user-details'>
        <UserDetails />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers
  }
}

export default connect(mapStateToProps)(App);