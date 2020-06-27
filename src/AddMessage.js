import React, { Component } from 'react';

class AddMessage extends Component {
    state ={
    	message : '',
    }
	
	inputChange = event => {
    	this.setState({
        	message: event.target.value
        })
    }
	
	handleOnSubmit = event => {
    	event.preventDefault();
      	this.props.onMessage(this.state.message)
    }

	isDisabled = () => {
    	return this.state.message==='';
    }

	render () {
      const {message}=this.state

    	return (
        	<div>
          	{/*{JSON.stringify(message)}*/}
          	  <form className="input-group" onSubmit ={this.handleOnSubmit} >
          			<input 
          			  type ="text"
          			  value = {message} 
          			  className="form-control"
          			  placeholder="Enter your message.."
					  onChange = {this.inputChange}
          			/>
          		<div className="input-group-append">
          			<button className="btn submit-button" disabled={this.isDisabled()}>
          			  SEND
          			</button>
          		</div>
          	</form>
          </div>
        )
    }
}

export default AddMessage