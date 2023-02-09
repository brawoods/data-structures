var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

// enqueue
Queue.prototype.enqueue = function (value) {
  this.storage[Object.keys(this.storage).length] = value;
  return Object.keys(this.storage).length;
};

// dequeue
Queue.prototype.dequeue = function () {
  let firstElement = _.first(Object.values(this.storage));
  delete this.storage[_.first(Object.keys(this.storage))];
  // iterate
  _.each(this.storage, function (value, key, collection) {
    collection[key - 1] = value;
    delete collection[key];
  });
  return firstElement;
};

// size
Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};
