'use strict';

class Publisher {
  /**
   * Object representation of publisher details
   * @param {string} name
   * @param {string} country
   * @param {string} stateProvince
   * @param {string} city
   */
  constructor(name, country, stateProvince, city) {
    /** @private */ this._name = name;
    /** @private */ this._country = country;
    /** @private */ this._stateProvince = stateProvince;
    /** @private */ this._city = city;
  }

  get name() { return this._name; }
  get country() { return this._country; }
  get stateProvince() { return this.stateProvince; }
  get city() { return this._city; }
}

module.exports = Publisher;
