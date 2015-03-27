var TodoAppDispatcher = require('../dispatcher/TodoAppDispatcher');

var TodoActions = {

  create: function(text) {
    TodoAppDispatcher.dispatch({
      actionType: "TODO_CREATE",
      text: text
    });
  },

  destroy: function(todo) {
    TodoAppDispatcher.dispatch({
      actionType: "TODO_DESTROY",
      id: todo.id
    });
  },

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
  },

  toggleCompleteAll: function() {
    TodoAppDispatcher.dispatch({
      actionType: "TODO_TOGGLE_COMPLETE_ALL"
    });
  }

};

module.exports = TodoActions;
