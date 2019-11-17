'use strict';

// MODULE IMPORTS
const Person = require('../src/electron/core/Person');

describe('Person name conversions', () => {
  const person = new Person('John', 'Smith', 'Doe');
  test('Has correct full name', () => { expect(person.fullName).toBe('John Smith Doe'); });
  test('Has correct short name', () => { expect(person.shortName).toBe('J. S. Doe'); });
  test('Has correct reversed short name', () => { expect(person.revShortName).toBe('Doe, J. S.'); });
});
