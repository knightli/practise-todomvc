var TodoActions = require('../../actions/TodoActions');

module.exports = {
  _onChange: function() {
    TodoActions.toggleCompleteAll();
  }
}
