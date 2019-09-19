import React from 'react';

const UserDetails = (props) => {
  if (props.user) {
    const { first, last, age, description, location } = props.user;
    return (
      <div className='user-details'>
        <div>
          <h2>{first}'s Details</h2>
        </div>
        <div>
          <p>First Name: {first}</p>
          <p>Last Name: {last}</p>
          <p>Age: {age}</p>
          <p>Location: {location}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    )
  } else {
    return null;
  }
}

export default UserDetails;