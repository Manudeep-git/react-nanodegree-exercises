import React, { Component } from 'react';
import PropTypes from 'prop-types'
import User from './User'

class UserList extends Component{
  
   static propTypes ={
    	users: PropTypes.array.isRequired,
    }
  
	state = {
    	hideGamesPlayed : true,
    }
	
	toggleGamesPlayedButton = () => {
    	this.setState(currentState => ({
        	hideGamesPlayed: !currentState.hideGamesPlayed
        }))
    };



	render() {
      const {users} = this.props
	  const {hideGamesPlayed} = this.state
	/*Question may arise as why to keep this gamesPlayedButton in render method instead of in the class, since it has to update based on the state
     we have to include it in the render method*/
	// Below code is JSX 
	  const gamesPlayedButton = (
    	<div>
    		<button className='small-button' onClick= {this.toggleGamesPlayedButton}>
				{hideGamesPlayed? "Hide" : "Show"} the Number of games played
			</button>
    	</div>
       );

      return (
      	<div>
         	<h1>Users:{users.length}</h1>
			{users.length>0 ? gamesPlayedButton : ""}
		<ol>
          {users.map(user => (
            <User key={user.username} user={user} hideGamesPlayed={hideGamesPlayed} />
          ))}
        </ol>
        </div>
      )
    }
}

export default UserList