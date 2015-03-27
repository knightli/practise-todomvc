var React = require('react');
var render = require('./render.jsx');
var controller = require('./controller.js');

var TodoItem = React.createClass({
  mixins: [controller],
  render: render
});

module.exports = TodoItem;
