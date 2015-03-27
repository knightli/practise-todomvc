var React = require('react');
var TodoHeader = require('../TodoHeader');
var TodoList = require('../TodoList');

module.exports = function() {
  return (
    <div>
      <h1>todos</h1>
      <TodoHeader />
      <TodoList />
    </div>
  );
}
