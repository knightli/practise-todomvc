var React = require('react');

module.exports = function() {

  var todo = this.props.todo;

  var className = this.cx({
    completed: todo.complete
  });

  return (
    <li className={className}>
      <input className="toggle" type="checkbox" checked={todo.complete} onChange={this._onToggleComplete} />
      <label>{todo.text}</label>
      <button className="destroy" onClick={this._onDestoryClick}></button>
    </li>
  );
}
