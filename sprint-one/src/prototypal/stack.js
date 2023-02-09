var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create a variable set create a new object from the prototype of stackMethods
  var instance = Object.create(stackMethods);
  // add a storage object to the variable
  instance.storage = {};
  // return the variable
  return instance;
};


// methods will refer to a a storage variable in the parent object
var stackMethods = {};

// push
stackMethods.push = function (value) {
  // get length of object via Object.keys and add value with length as index
  this.storage[Object.keys(this.storage).length] = value;
  // return length
  return Object.keys(this.storage).length;
};

// pop
stackMethods.pop = function () {
  // find and save the last element as a new variable
  var lastElement = this.storage[Object.keys(this.storage).length - 1];
  // delete the last element
  delete this.storage[Object.keys(this.storage).length - 1];
  // return the variable
  return lastElement;
};

// size
stackMethods.size = function () {
  // get length of object via Object.keys on storage and return
  return Object.keys(this.storage).length;
};

