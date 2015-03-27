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
        console.log('todo: use action to create a new todo item with text '+value);
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
