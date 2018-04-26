import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import questions from '../config/questions';


class Quiz extends React.Component {

	nextQuestion = () => {
		const questionNumber = parseInt(this.props.match.params.questionNumber);
		console.log(questionNumber, questionNumber < questions.length);
		if (questionNumber < questions.length) {
			console.log(questionNumber);
			const num = questionNumber + 1;
			return `/quiz/${num}/`
		}};

	prevQuestion = () => {
		const questionNumber = parseInt(this.props.match.params.questionNumber);
		if (questionNumber < questions.length) {
			const num = questionNumber - 1;
			console.log(`/quiz/${num}/`);
			return `/quiz/${num}/`
		}};


  render() { 
  const myPropsNumber = this.props.match.params.questionNumber; 
   
    return (
      <div className="container">
  		<div className="notification">
			<section className="hero is-primary">
			  <div className="hero-body">
			    <div className="container">
			      <h1 className="title">
			        Quiz
			      </h1>
			      <h2 className="subtitle">
			        Z wiedzy o HTML
			      </h2>
			    </div>
			  </div>
			</section>
			<div>
				<Question currentQuestion={myPropsNumber} />
			</div>
				<progress className="progress" value="15" max="100">15%</progress>	
				<a className="button" href={this.prevQuestion()}> <section className="section"><i className="fas fa-angle-left"/></section>Wróć</a>
				<a className="button is-success is-pulled-right" href={this.nextQuestion()}> <section className="section">Dalej <i className="fas fa-angle-right"/></section></a>
		</div>
	</div>
    ); 
  }  
};


export default Quiz
