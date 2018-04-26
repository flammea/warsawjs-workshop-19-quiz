import React from 'react';
import ReactDOM from 'react-dom';
import Questions from '../config/questions';


class Question extends React.Component {
  render() {
  	console.log(this.props)
    return (
    	<nav className="panel">
				  <p className="panel-heading">
				    {Questions[this.props.currentQuestion].question}
				  </p>
		
				  <a className="panel-block is-active">
				    <span className="panel-icon">
				      <i className="fas fa-circle" aria-hidden="true"/>
				    </span>
				    {Questions[this.props.currentQuestion].answers[0]}
				  </a>
				  <a className="panel-block">
				    <span className="panel-icon">
				      <i className="fas fa-circle" aria-hidden="true"/>
				    </span>
				    {Questions[this.props.currentQuestion].answers[1]}
				  </a>
				  <a className="panel-block">
				    <span className="panel-icon">
				      <i className="fas fa-circle" aria-hidden="true"/>
				    </span>
				    {Questions[this.props.currentQuestion].answers[2]}
				  </a>
				  <a className="panel-block">
				    <span className="panel-icon">
				      <i className="fas fa-circle" aria-hidden="true"/>
				    </span>
				    {Questions[this.props.currentQuestion].answers[3]}
				  </a>
				  <div className="panel-block">
				  
				  </div>
				</nav>
    ); 
  }  
};

export default Question