import React from 'react';

const Users = ({ allUsers, handleSelect }) => {
  const userArray = Object.values(allUsers);
  return (
    <div>
      {userArray ? userArray.map((user) => {
        return (
          <div key={user.id}>
            <div onClick={handleSelect}>
              <div className='names' id={user.id}>{user.first} {user.last}</div>
            </div>
          </div>
        )
      }) : <div>allUsers is undefined</div>}
    </div>
  )
}

export default Users;