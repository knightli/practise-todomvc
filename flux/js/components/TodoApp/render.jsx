var React = require('react');
var TodoToggler = require('../TodoToggler');
var TodoCreator = require('../TodoCreator');
var TodoList = require('../TodoList');

module.exports = function() {
  return (
    <div>
      <h1>todos</h1>
      <header>
        <TodoCreator id="new-todo" />
      </header>
      <section id="main">
        <TodoToggler id="toggle-all" />
        <TodoList id="todo-list" />
      </section>
    </div>
  );
}
