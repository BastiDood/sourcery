'use strict';

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
}

module.exports = Citation;
