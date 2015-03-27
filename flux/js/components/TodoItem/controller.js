var TodoActions = require('../../actions/TodoActions');

module.exports = {

  _onToggleComplete: function(e) {
    TodoActions.toggleComplete(this.props.todo);
  }

};
