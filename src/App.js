import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatDisplay from './ChatDisplay'

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];


class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
       messages : [
  	{ username: 'Amy', text: 'Hi, Jon!' },
  	{ username: 'Amy', text: 'How are you?' },
  	{ username: 'John', text: 'Hi, Amy! Good, you?' },
	],
  }

  onMessage = (username,message) => {
    const name = username
    this.setState(currState => ({
      messages: [...currState.messages,{username: name,text: message}],
    }));
  }


  render() {
    const{messages}=this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
    		{users.map(user => (
    			<ChatDisplay
    				key={user.username}
					user={user}
					messages ={messages}
					newMessage= {this.onMessage}
				/>
    		))}
        </div>
      </div>
    );
  }
}

export default App;
