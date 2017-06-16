import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import App from './components/App';
import Results from './components/Results';
import Repos from './components/Repos';
import RepoPage from './components/RepoPage';

import reducer from './reducers/index';

const store = createStore(reducer, applyMiddleware(thunk,createLogger()));


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route component={Results}>
                    <IndexRoute component={Repos} />
                    <Route path='/repos/(:search)' component={Repos} />
                    {/* I can add the rest of the pages here users, code, etc*/}
                    {/*<Route path='/users/(:search)' component={Users} />
                    <Route path='/code/(:search)' component={Code} />*/}
                </Route>
                <Route path='/repos/:owner/:repo' component={RepoPage} />
            </Route>
        </Router>
  </Provider>, document.getElementById('app')
);