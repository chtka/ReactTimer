// presentational component: simply renders information
// container component: maintains state and renders children
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('main');
var Timer = require('timer');
var Countdown = require('countdown');

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

// when path is "about", renders about, if its just the index of the page, then renders weather
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Timer}/>
            <Route path="countdown" component={Countdown}/>
        </Route>
    </Router>,
    document.getElementById('app')
);