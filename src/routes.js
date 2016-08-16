import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router'
import store from './store'
import Root from './containers/Root'
import Home from './RouteHandlers/Home'

export default (
    <Router history={browserHistory}>
        <Route path='/' component={Root}>
            <IndexRoute component= {Home} />
        </Route>
    </Router>
)