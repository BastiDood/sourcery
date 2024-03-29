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

  /** @param {string} newFirst */
  set firstName(newFirst) { this._first = newFirst; }
  /** @param {string} newMiddle */
  set middleName(newMiddle) { this._middle = newMiddle; }
  /** @param {string} newLast */
  set lastName(newLast) { this._last = newLast; }

  get fullName() { return `${this._first} ${this._middle} ${this._last}`; }
  get shortName() { return `${this._first[0]}. ${this._middle[0]}. ${this._last}`; }
  get revShortName() { return `${this._last}, ${this._first[0]}. ${this._middle[0]}.`; }
}

module.exports = Person;
