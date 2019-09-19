import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from './Users.jsx';
import UserDetails from './UserDetails.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchAll();
  }

  handleSelect(e) {
    let { selectUser, allUsers } = this.props;
    let person = allUsers[e.target.id];
    selectUser(person);
  }

  render() {
    return (
      <div className='app'>
        <div>
          <Users allUsers={this.props.allUsers} handleSelect={this.handleSelect} />
        </div>
        <div className='user-details'>
          <UserDetails user={this.props.selectedUser}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    allUsers: state.allUsers,
    selectedUser: state.selectedUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch({ type: 'FETCH_USERS' }),
    selectUser: (person) => dispatch({ type: 'SELECT_USER', payload: person })
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);