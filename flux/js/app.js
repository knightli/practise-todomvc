var React = require('react');

var TodoApp = require('./components/TodoApp');

var todolist = [
  {
    text: 'todo list data item 1',
    complete: false
  },
  {
    text: 'todo list data item 2',
    complete: false
  },
  {
    text: 'todo list data item 3',
    complete: false
  }
];

React.render(
  <TodoApp todolist={todolist} />,
  document.getElementById('todoapp')
);
