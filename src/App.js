import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser'
import UserList from './UserList'
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state ={
  	users : []
  }

  handleAddUser = user => {
    user.gamesPlayed =0;// this is the best place to add no of games as it is defaulted to 0
  	this.setState(previousState => ({
    	users : [...previousState.users,user],
    }))
  } 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
    	<AddUser users={this.state.users} onAddUser={this.handleAddUser}/>
		<UserList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
