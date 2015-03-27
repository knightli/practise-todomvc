var TodoStore = require('../../store/TodoStore');

function getTodoState(){
  return {
    todolist: TodoStore.getAll(),
    isAllComplete: TodoStore.isAllComplete()
  };
}

module.exports = {

  getInitialState: function() {
    if(this.props.todolist){
      TodoStore.init(this.props.todolist);
    }
    return getTodoState();
  },

  componentDidMount: function() {
    TodoStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    TodoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getTodoState());
  }
};
