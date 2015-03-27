var TodoActions = require('../../actions/TodoActions');

var ENTER_KEY_CODE = 13;

module.exports = {

  getInitialState: function() {
    return {
      value: this.props.value || ''
    };
  },

  _onKeyDown: function(e) {
    if(e.keyCode === ENTER_KEY_CODE) {
      var value = this.state.value;
      value = value.trim();
      if(value) {
        TodoActions.create(value);
      }
      this.setState({value:''});
    }
  },

  _onChange: function(e) {
    this.setState({
      value: e.target.value
    });
  }
};
