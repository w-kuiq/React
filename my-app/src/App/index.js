
// import ReactDOM from 'react-dom';
import ChildA from './child-a/a.js';
import ChildB from './child-b/b.js';
import React from 'react';


// var ChildA = require('./child-a/a.js'),
// var    ChildB = require('./child-b/b.js');
    // React = require('react');

var App = React.createClass({
    render() {
        return (
            <div>
                <h1>这是父级</h1>
                <ChildA/>
                <ChildB/>

            </div>
        )
    }
});

module.exports = App;
