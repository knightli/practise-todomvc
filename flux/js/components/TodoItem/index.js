var React = require('react');
var render = require('./render.jsx');
var controller = require('./controller.js');
var utilsHelper = require('../../utils/Helpers');

var TodoItem = React.createClass({
  mixins: [utilsHelper, controller],
  render: render
});

module.exports = TodoItem;
