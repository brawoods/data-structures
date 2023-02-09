class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  // push
  push (value) {
    this.storage[Object.keys(this.storage).length] = value;
    return Object.keys(this.storage).length;
  }
  // pop
  pop () {
    // grab last element and save to variable
    let lastElement = _.last(Object.values(this.storage));
    // delete last element
    delete this.storage[_.last(Object.keys(this.storage))];
    // return variable
    return lastElement;
  }

  // size
  size () {
    return Object.keys(this.storage).length;
  }


}