var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};

queueMethods.enqueue = function (value) {
  // store value at index of object length
  this.storage[Object.keys(this.storage).length] = value;
  // return length of object
  return Object.keys(this.storage).length;

};

queueMethods.dequeue = function () {
  // save value of first property as a variable
  var firstKey = _.first(Object.keys(this.storage));
  var firstElement = this.storage[firstKey];
  // delete the first property
  delete this.storage[firstKey];
  // iterate over keys in object
  for (let key in this.storage) {
    // reassign each value to the key before it (minus 1)
    // then delete current property
    this.storage[key - 1] = this.storage[key];
    delete this.storage[key];
  }
  // return the first value
  return firstElement;
};