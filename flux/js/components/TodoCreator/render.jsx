var React = require('react');

module.exports = function() {
  return (
    <input id={this.props.id} placeholder="What needs to be done?"
      value={this.state.value}
      onChange={this._onChange}
      onKeyDown={this._onKeyDown} />
  );
}
