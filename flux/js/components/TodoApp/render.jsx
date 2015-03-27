var React = require('react');
var TodoToggler = require('../TodoToggler');
var TodoCreator = require('../TodoCreator');
var TodoList = require('../TodoList');

module.exports = function() {
  return (
    <div>
      <h1>todos</h1>
      <header>
        <TodoToggler />
        <TodoCreator />
      </header>
      <section>
        <TodoList />
      </section>
    </div>
  );
}
