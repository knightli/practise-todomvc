var React = require('react');
var TodoItem = require('../TodoItem');

module.exports = function() {
  return (
    <ul id={this.props.id}>
      {this.props.todolist.map(function(item) {
        return <TodoItem key={item.id} todo={item} />
      })}
    </ul>
  );
}
