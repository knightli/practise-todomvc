module.exports = {

  getInitialState: function() {
    return {
      complete: this.props.todo.complete
    };
  },

  _onToggleComplete: function(e) {
    var complete = this.state.complete;
    console.log('_onToggleComplete, before toggle, complete:'+ complete);
    complete = !complete;
    this.setState({complete: complete});
  }

};
