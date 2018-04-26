import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './components/Quiz.js'
import Score from './components/Score.js'


import { 
	BrowserRouter as Router,
	Route, 
	Link 
	} from 'react-router-dom';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/quiz/:questionNumber" component={Quiz} />
			<Route path="/wyniki/" component={Score} />
		</div>
	</Router>, 
document.getElementById('root')
);

	
