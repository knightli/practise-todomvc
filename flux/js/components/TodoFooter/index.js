var React = require('react');
var render = require('./render.jsx');
var helper = require('./helper');
var controller = require('./controller');

var TodoFooter = React.createClass({
  mixins: [helper, controller],
  render: render
});

module.exports = TodoFooter;
