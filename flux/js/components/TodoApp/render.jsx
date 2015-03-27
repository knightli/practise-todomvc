var React = require('react');
var TodoToggler = require('../TodoToggler');
var TodoCreator = require('../TodoCreator');
var TodoList = require('../TodoList');
var TodoFooter = require('../TodoFooter');

module.exports = function() {
  return (
    <div>
      <h1>todos</h1>
      <header>
        <TodoCreator id="new-todo" />
      </header>
      <section id="main">
        <TodoToggler id="toggle-all" />
        <TodoList id="todo-list" todolist={this.props.todolist} />
      </section>
      <TodoFooter id="footer" todolist={this.props.todolist} />
    </div>
  );
}
