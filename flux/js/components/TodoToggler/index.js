var React = require('react');
var render = require('./render.jsx');
var controller = require('./controller');

var TodoToggler = React.createClass({
  mixins: [controller],
  render: render
});

module.exports = TodoToggler;
