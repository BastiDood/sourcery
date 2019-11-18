'use strict';

// MONTH DICTIONARY
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

/**
 * @typedef {import('./Person')} Person
 * @typedef {import('./Publisher')} Publisher
 */

class Citation {
  /**
   * Object representation of a citation
   * @param {Person[]} authors
   * @param {Publisher} publisher
   * @param {string} title
   * @param {Date} publishDate
   * @param {Date} accessDate
   * @param {URL} url
   */
  constructor(authors, publisher, title, publishDate, accessDate, url) {
    /** @private */ this._authors = authors;
    /** @private */ this._publisher = publisher;
    /** @private */ this._title = title;
    /** @private */ this._publishDate = publishDate;
    /** @private */ this._accessDate = accessDate;
    /** @private */ this._url = url;
  }

  get APA() {
    const author = this._authors[0].revShortName;
    const publisher = this._publisher.name;
    const title = this._title;
    const published = `${this._publishDate.getFullYear()}, ${MONTHS[this._publishDate.getMonth()]} ${this._publishDate.getDate()}`;
    const accessed = `${MONTHS[this._accessDate.getMonth()]} ${this._accessDate.getDate()}, ${this._accessDate.getFullYear()}`;
    const url = `<a href="${this._url.href}">${this._url.href}</a>`;
    return `${author} (${published}). ${title}. Retrieved ${accessed}, from ${publisher}: ${url}.`;
  }
}

module.exports = Citation;
