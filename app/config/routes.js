const React = require('react');
const ReactRouter = require('react-router');
const Main = require('../containers/Main');
const HomeContainer = require('../containers/HomeContainer');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;

const hashHistory = ReactRouter.hashHistory;

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={HomeContainer} />
    </Route>
  </Router>
)

module.exports = routes;
