import React from 'react';
import { connect } from 'react-redux';

const UserDetails = (props) => {
  if (props.selectedUser) {
    const { first, last, age, description, location } = props.selectedUser;
    return (
      <div className='user-details'>
        <div>
          <h2>{first}'s Details</h2>
        </div>
        <div>
          <ul>
            <li>First Name: {first}</li>
            <li>Last Name: {last}</li>
            <li>Age: {age}</li>
            <li>Location: {location}</li>
            <li>Description: {description}</li>
          </ul>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser
  }
}

export default connect(mapStateToProps)(UserDetails);