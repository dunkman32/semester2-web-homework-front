import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Episodes from './views';
import Notifications from './components/notifications';
import PageNotFound from './views/page-not-found';
import Loading from './components/loading/loading';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Episodes}/>
				<Route component={PageNotFound}/>
			</Switch>
			<Notifications/>
			<Loading/>
		</div>
	);
};

export default App;
