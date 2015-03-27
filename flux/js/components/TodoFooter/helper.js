function getLeftCount(todolist) {
  var count = 0;
  todolist.map(function(item) {
    if(!item.complete) count ++;
  });
  return count;
}

function getCompletedCount(todolist) {
  var count = 0;
  todolist.map(function(item) {
    if(item.complete) count ++;
  });
  return count;
}

module.exports = {
  getLeftCount: getLeftCount,
  getCompletedCount: getCompletedCount
}
