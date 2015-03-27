var TodoAppDispatcher = require('../dispatcher/TodoAppDispatcher');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _todos = [];

function id2Idx(id) {
  for(var i=0,len=_todos.length; i<len; i++) {
    if(_todos[i].id==id) return i;
  }
  return -1;
}

function update(id, newState) {
  var idx = id2Idx(id);
  _todos[idx] = assign({}, _todos[idx], newState);
}

var TodoStore = assign({}, EventEmitter.prototype, {
  init: function(todos) {
    _todos = todos;
  },
  getAll: function(){
    return _todos;
  },
  emitChange: function(){
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

TodoAppDispatcher.register(function(action) {
  var text;

  switch(action.actionType) {

    case "TODO_UNDO_COMPLETE":
      update(action.id, {complete: false});
      TodoStore.emitChange();
      break;

    case "TODO_COMPLETE":
      update(action.id, {complete: true});
      TodoStore.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = TodoStore;
