var React = require('react');

module.exports = function() {
  return (
    <li>
      <input className="toggle" type="checkbox" />
      <label>{this.props.text}</label>
      <button className="destory"></button>
    </li>
  );
}
