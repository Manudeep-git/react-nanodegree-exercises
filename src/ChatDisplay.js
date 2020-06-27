import React, { Component } from 'react';
//import PropTypes from 'prop-types'
import MessageDisplay from './MessageDisplay'
import AddMessage from './AddMessage'

/*
This component passes a callback function to AddMessage (called "onMessage")
because we will need to add new messages to the message history in BOTH chat windows.
Because BOTH chat windows need access to the messages piece of state, that piece of
state will live in the App.js file. That means that the callback function
will be passed from the App Component all the way down to the AddMessage Component.
*/

class ChatDisplay extends Component{
  
  	onMessage = message => {
      	//The callback is getting called.
    	this.props.newMessage(this.props.user.username,message)
    }

	render(){
      	const {user,messages}=this.props
    	return (
        	<div className="chat-window">
          		<h2>Super Awesome Chat</h2>
          		<div className="name sender"> {user.username}</div>
				<ul className= 'message-list'>
					{messages.map((message,index)=> (
                    	<MessageDisplay
                      		key ={index}
							message={message}
							user={user}
						/>
					))}
				</ul>
				<AddMessage onMessage={this.onMessage}/>
			</div>
        )
    }
		
}

export default ChatDisplay