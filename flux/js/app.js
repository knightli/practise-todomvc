var React = require('react');

var TodoApp = require('./components/TodoApp');

var todolist = [
  {
    id: 10001,
    text: 'todo list data item 1',
    complete: false
  },
  {
    id: 10002,
    text: 'todo list data item 2',
    complete: false
  },
  {
    id: 10003,
    text: 'todo list data item 3',
    complete: false
  }
];

React.render(
  <TodoApp todolist={todolist} />,
  document.getElementById('todoapp')
);
