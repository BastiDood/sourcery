'use strict';

class Person {
  /**
   * Object representation of a person's name.
   * @param {string} first
   * @param {string} middle
   * @param {string} last
   */
  constructor(first, middle, last) {
    /** @private */ this._first = first;
    /** @private */ this._middle = middle;
    /** @private */ this._last = last;
  }

  set firstName(newFirst) { this._first = newFirst; }
  set middleName(newMiddle) { this._middle = newMiddle; }
  set lastName(newLast) { this._last = newLast; }

  get fullName() { return `${this._first} ${this._middle} ${this._last}`; }
}

module.exports = Person;
