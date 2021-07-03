import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Search from './pages/PageSearch/Search'
import Form from './pages/Form/Form'
import Edit from './pages/Edit/Edit'

function App() {

	return ( 
		
		<Router>
			<Switch>
				<Route exact path="/" component={Search} />
				<Route path="/create" component={Form} />
				<Route path="/edit/:id" component={Edit} />
			</Switch>
		</Router>
		
	)
}

export default App