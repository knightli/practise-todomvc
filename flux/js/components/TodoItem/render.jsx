var React = require('react');

module.exports = function() {
  return (
    <li>
      <input className="toggle" type="checkbox" />
      <label>{this.props.text}</label>
      <button class="destory"></button>
    </li>
  );
}
