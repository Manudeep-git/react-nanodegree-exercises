import React, { Component } from 'react';
//import PropTypes from 'prop-types'

class MessageDisplay extends Component {
	render(){
        const {user,message,index}=this.props
    	return (
        	<li
          		key={index}
          		className = {message.username === user.username ? 'message sender' : 'message recipient'}
			>
				<p>{`${message.username}:${message.text}`}</p>
          	</li>
        )
    }
}

export default MessageDisplay