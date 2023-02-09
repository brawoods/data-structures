var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // set a instance as a new object created from the protoype of queueMethods
  var instance = Object.create(queueMethods);
  // add the storage property to instance
  instance.storage = {};
  // return instance
  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  // find length and add given value to object using length as index
  this.storage[Object.keys(this.storage).length] = value;
  // return length
  return Object.keys(this.storage).length;
};

queueMethods.dequeue = function () {
  // grab the first element, save as variable
  let firstElement = _.first(Object.values(this.storage));
  // deletes the first element
  delete this.storage[_.first(Object.keys(this.storage))];
  // iterates over object
  _.each(this.storage, function(value, key, collection) {
    // sets current value to key minus 1
    // deletes current property
    collection[key - 1] = collection[key];
    delete collection[key];
  });

  // return saved variable
  return firstElement;
};

queueMethods.size = function () {
  return Object.keys(this.storage).length;
};


