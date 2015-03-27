var React = require('react');

module.exports = function() {

  var todo = this.props.todo;

  return (
    <li>
      <input className="toggle" type="checkbox" checked={todo.complete} />
      <label>{todo.text}</label>
      <button className="destory"></button>
    </li>
  );
}
