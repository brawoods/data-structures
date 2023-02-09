var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {
  size: function() {
    return Object.keys(this.storage).length;
  },
  push: function(value) {
    // get the last key of the object
    var lastKey = Object.keys(this.storage).length - 1;
    // set the new value to the last key plus 1
    this.storage[lastKey + 1] = value;
    // return the length of object
    return Object.keys(this.storage).length;
  },
  pop: function() {
    // find last key
    var lastKey = Object.keys(this.storage).length - 1;
    // save last value as variable
    var lastElement = this.storage[lastKey];
    // delete last property
    delete this.storage[lastKey];
    // return saved value
    return lastElement;
  }
};


