var TodoAppDispatcher = require('../dispatcher/TodoAppDispatcher');

var TodoActions = {

  toggleComplete: function(todo) {
    var id = todo.id;
    if(todo.complete) {
      TodoAppDispatcher.dispatch({
        actionType: "TODO_UNDO_COMPLETE",
        id: id
      });
    }
    else {
      TodoAppDispatcher.dispatch({
        actionType: "TODO_COMPLETE",
        id: id
      });
    }
  }
};

module.exports = TodoActions;
