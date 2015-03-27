var React = require('react');
var TodoItem = require('../TodoItem');

module.exports = function() {
  return (
    <ul id={this.props.id}>
      <TodoItem text="todo list item 1" />
      <TodoItem text="todo list item 2" />
      <TodoItem text="todo list item 3" />
    </ul>
  );
}
