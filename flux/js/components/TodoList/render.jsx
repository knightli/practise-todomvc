var React = require('react');

//外部依赖: 在 common 的 css 中 已经约定了 ul 的 id 为 `todo-list`

module.exports = function() {
  return (
    <ul id="todo-list">
      <li>todo list item 1</li>
      <li>todo list item 2</li>
      <li>todo list item 3</li>
    </ul>
  );
}
