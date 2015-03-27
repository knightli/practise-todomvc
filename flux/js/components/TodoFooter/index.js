var React = require('react');
var render = require('./render.jsx');
var helper = require('./helper');

var TodoFooter = React.createClass({
  mixins: [helper],
  render: render
});

module.exports = TodoFooter;
