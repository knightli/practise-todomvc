var React = require('react');

//外部依赖: 在common的css中已经约定了 creator 的 input id为`new-todo`

module.exports = function() {
  return (
    <input id={this.props.id} placeholder="What needs to be done?" />
  );
}
