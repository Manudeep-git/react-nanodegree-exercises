import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
// we will take out value 1,2,3 from here as we will include button in another component to generate them


class App extends Component {
  state = {
    numQuestions : 0,
    numCorrect : 0
  }
  
handleAnswer = (correctAnswer) => {
  if(correctAnswer){
  	this.setState(currentState => ({
    	numCorrect : currentState.numCorrect + 1,
    }))
  }
  this.setState(currentState => ({
  		numQuestions : currentState.numQuestions + 1,
  }))
}  
render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
  		 <Game handleAnswer = {this.handleAnswer} numQuestions = {this.state.numQuestions} numCorrect = {this.state.numCorrect}/>
        </div>
      </div>
    );
  }
}

export default App;
