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
        <TodoToggler id="toggle-all" isAllComplete={this.state.isAllComplete} />
        <TodoList id="todo-list" todolist={this.state.todolist} />
      </section>
      <TodoFooter id="footer" todolist={this.state.todolist} />
    </div>
  );
}
