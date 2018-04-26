import React from 'react';
import ReactDOM from 'react-dom';

class Score extends React.Component {
  render() {
    return (
    	<div>
			Numer pytania: {this.props.match.params.questionNumber}
		</div>
    ); 
  }  
};

export default Score