import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddUser extends Component{
  
  static propTypes ={
  	onAddUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired,
  }
  
  state = {
  	user : {
    	firstName: '',
      	lastName: '',
      	username: '',
    },
    userExists: false,
  }

  userExists = username => {
    const users = this.props.users
  	for(let user of users){
          if(user.username === username){
          	return true;
          }
        }
    return false;
  }

  onSubmit = event => {
    event.preventDefault();
    const response = this.userExists(this.state.user.username) 
    // here is is wise to get username via state but not event.target.name as there are mutliple values
    if(!response){
    	this.props.onAddUser(this.state.user)
    }
    this.setState (currentState => ({
    	userExists : response,
    }));
  }
  
 onInputChange = event => {
 	const {name, value} = event.target
    
    this.setState(currentState => ({
    	user : {...currentState.user,[name]:value},
    }));
 }

 isFieldEmpty = () => {
    const {firstName, lastName, username} = this.state.user
 	return firstName === '' || lastName === '' || username === '';
 }

  render() {
    const { firstName, lastName, username} = this.state

    return (
      <div>
      	<h1>Add New User </h1>
        <form onSubmit={this.onSubmit}>
		 <div>
          <input
            type="text"
			name= 'firstName'
            placeholder="Enter First Name"
            value={firstName}
            onChange={this.onInputChange}
          />
		  <input
            type="text"
			name = 'lastName'
            placeholder="Enter Last Name"
            value={lastName}
            onChange={this.onInputChange}
          />
		 <input
            type="text"
			name= 'username'
            placeholder="Enter User Name"
            value={username}
            onChange={this.onInputChange}
          />
	     </div>
          <button disabled={this.isFieldEmpty()}>Add</button>
        </form>
		{this.state.userExists ? (
          <p className="error">Username already exists, Please try another</p>
        ) : (
          ''
        )}
      </div>
    );
  }

}

export default AddUser