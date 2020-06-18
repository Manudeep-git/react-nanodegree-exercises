import React from 'react';

class Game extends React.Component{
  // method for creating new question
  newchallenge = () => {
 	const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
  	return [value1, value2, value3, proposedAnswer];
}
  state = {
    value1 : this.newchallenge()[0],
    value2 : this.newchallenge()[1],
    value3: this.newchallenge()[2],
    propAnswer: this.newchallenge()[3]
  }
//changing the values of state using setState
updateValues = (newValues) => {
  this.setState(currentState =>({
  	value1 : newValues[0],
    value2 : newValues[1],
    value3 : newValues[2],
    propAnswer : newValues[3]
  }));
}
// getting event action form True, False buttons
handleAnswer = event => {
  const newValues = this.newchallenge();
  this.updateValues(newValues);
  const answer = this.evaluateAnswer(event.target.name)
  this.props.handleAnswer(answer)
}
evaluateAnswer = ( userAnswer) => {
	const { value1, value2, value3, proposedAnswer } = this.state;
	const correctAnswer = value1+value2+value3;
  	return (
      (correctAnswer === proposedAnswer && userAnswer === 'true') ||
      (correctAnswer !== proposedAnswer && userAnswer === 'false')
    );
}
  render(){
    const { value1, value2, value3, propAnswer } = this.state;
    return (
      // without this '(', JS will automatically put a ';' after 'return.'
      <div>
		<div className="equation">
      		<p> {this.ans}</p>
            <p className="text">{`${value1} + ${value2} + ${value3} = ${propAnswer}`}</p>
          </div>
		<p className="text">
            Your Score: {this.props.numCorrect}/{this.props.numQuestions}
          </p>
        <button onClick={this.handleAnswer} name="true">
          True
        </button>
        <button name="false" onClick={this.handleAnswer}>
          False
        </button>
      </div>
    );
}}

export default Game