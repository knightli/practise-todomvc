var React = require('react');
var render = require('./render.jsx');
var controller = require('./controller');

var TodoCreator = React.createClass({
  mixins: [controller],
  render: render
});

module.exports = TodoCreator;
