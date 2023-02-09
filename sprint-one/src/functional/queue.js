var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // get key of last property
    // add value to key plus 1 of last property
    storage[Object.keys(storage).length] = value;
    return Object.keys(storage).length;
  };

  someInstance.dequeue = function() {
    // identify lastKey in storage
    // store last element in variable
    let firstElement = storage[_.first(Object.keys(storage))];
    // remove value from object
    delete storage[_.first(Object.keys(storage))];
    // reassign each property to a key minus 1
    // iterate over every element remaining
    // reassign to key 1 less than current
    for (var key in storage) {
      // if lastkey
      storage[key - 1] = storage[key];
      delete storage[key];
    }
    console.log('new length: ', Object.keys(storage).length);
    return firstElement;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
