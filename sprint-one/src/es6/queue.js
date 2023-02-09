class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  // enqueue
  enqueue (value) {
    this.storage[Object.keys(this.storage).length] = value;
    return Object.keys(this.storage).length;
  }

  // dequeue
  dequeue () {
    // save the first element as a variable
    let firstElement = _.first(Object.values(this.storage));
    // delete first element
    delete this.storage[_.first(Object.keys(this.storage))];
    // iterate over object
    _.each(this.storage, function (value, key, collection) {
      // shift current value to key minus 1
      collection[key - 1] = value;
    });
    // delete final property
    delete this.storage[_.last(Object.keys(this.storage))];
    // return saved variable
    return firstElement;
  }
  // size
  size () {
    return Object.keys(this.storage).length;
  }


}
