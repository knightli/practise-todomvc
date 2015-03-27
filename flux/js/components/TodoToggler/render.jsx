var React = require('react');

//外部依赖: 在common的css中已经约定了 toggler 的 input id为`toggle-all`

module.exports = function() {
  return (
    <input id="toggle-all" type="checkbox" />
  );
}
