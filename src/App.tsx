import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/Nav'

import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
import Index from './views/students/index'
import CreateStudent from './views/students/create'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
					<Index/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/index">
          <Index/>
        </Route>
				<Route path="/add-student">
          <CreateStudent/>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
