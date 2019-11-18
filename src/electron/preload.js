'use strict';

// MODULE IMPORTS
const Citation = require('./core/Citation');
const Person = require('./core/Person');
const Publisher = require('./core/Publisher');

/**
 * @typedef {Object} DataSubmission
 * @property {string} DataSubmission.firstName
 * @property {string} DataSubmission.middleName
 * @property {string} DataSubmission.lastName
 * @property {string} DataSubmission.title
 * @property {string} DataSubmission.publishDate
 * @property {string} DataSubmission.accessDate
 * @property {string} DataSubmission.url
 */

/**
 * @param {DataSubmission} data
 */
function sendData({
  firstName,
  middleName,
  lastName,
  title,
  publishDate,
  accessDate,
  url
}) {
  // TODO: Take note of the case of multiple authors
  const person = new Person(firstName, middleName, lastName);
  const published = new Date(publishDate);
  const accessed = new Date(accessDate);
  // TODO: Store citation to disk
  return new Citation(
    [ person ],
    new Publisher('Chiong Press', 'Philippines', 'NCR', 'San Juan City'),
    title,
    published,
    accessed,
    new URL(url)
  );
}

// Add bindings
process.on('loaded',() => {
  window['sendData'] = sendData;  
});
