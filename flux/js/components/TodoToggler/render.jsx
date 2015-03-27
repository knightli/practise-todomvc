var React = require('react');

module.exports = function() {
  return (
    <input id={this.props.id} type="checkbox"
      checked={this.props.isAllComplete ? "checked" : ""}
      onChange={this._onChange} />
  );
}
