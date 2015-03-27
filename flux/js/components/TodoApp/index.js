var React = require('react');
var render = require('./render.jsx');
var controller = require('./controller');

var TodoApp = React.createClass({
  mixins: [controller],
  render: render
});

module.exports = TodoApp;
