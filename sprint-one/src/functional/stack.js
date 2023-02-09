var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // identify lastKey in storage
    storage[Object.keys(storage).length] = value;
    return Object.keys(storage).length;
  };

  someInstance.pop = function() {
    // identify lastKey in storage
    let lastKey = Object.keys(storage).length - 1;
    // store last element in variable
    let lastElement = storage[lastKey];
    // remove value from object
    delete storage[lastKey];
    // return storage at lastKey
    return lastElement;
  };

  someInstance.size = function() {
    //set length =  use Object.keys to get a number collection of the keys
    // return length
    return Object.keys(storage).length;
  };

  return someInstance;
};
