/* React imports */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

/* Routing / Redux / store imports */
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

/* CSS import */
import '../sass/style.scss';

/* App components import */
import App from './components/App/App';
import NotFound from './components/404/';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>

            </Route>
        </Router>
    </Provider>
);

render((<AppContainer>{router}</AppContainer>),document.getElementById("app"));

module.hot.accept();