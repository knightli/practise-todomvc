module.exports = {
  cx: function cx(classNames) {
    if (typeof classNames == 'object') {
      return Object.keys(classNames).filter(function(className) {
        return classNames[className];
      }).join(' ');
    } else {
      return Array.prototype.join.call(arguments, ' ');
    }
  }
};
