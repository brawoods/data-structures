var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

// create prototypes to append to Stack, use
// create storage object

// push
Stack.prototype.push = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
  return Object.keys(this.storage).length;
};

// pop
Stack.prototype.pop = function () {
  // save last element
  let lastElement = _.last(Object.values(this.storage));
  // delete
  delete this.storage[_.last(Object.keys(this.storage))];
  //return element
  return lastElement;
};

// size

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};