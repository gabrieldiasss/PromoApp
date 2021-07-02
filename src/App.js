import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Search from './pages/PageSearch/Search'
import Form from './pages/Form/Form'

function App() {

	return ( 
		
		<Router>
			<Switch>
				<Route exact path="/" component={Search} />
				<Route path="/create" component={Form} />
			</Switch>
		</Router>
		
	)
}

export default App