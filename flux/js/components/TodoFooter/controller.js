var TodoActions = require('../../actions/TodoActions');

module.exports = {

  _onClearCompletedClick: function(){
    TodoActions.destroyCompleted();
  }

};
