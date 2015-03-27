var React = require('react');

var Block = require('../../utils/Block');

module.exports = function() {

  var completedCount = this.getCompletedCount(this.props.todolist);
  var leftCount = this.getLeftCount(this.props.todolist);

  return (
    <footer id="footer">
      <span id="todo-count">
        <strong>{leftCount}</strong>
        <span> items left</span>
      </span>
      {Block.If(completedCount,
        <button id="clear-completed" onClick={this._onClearCompletedClick}>Clear completed ({completedCount})</button>
      )}
    </footer>
  );
}
