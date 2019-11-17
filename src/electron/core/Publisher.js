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
    /** @private */ this._name = name.trim();
    /** @private */ this._country = country.trim();
    /** @private */ this._stateProvince = stateProvince.trim();
    /** @private */ this._city = city.trim();
  }

  get name() { return this._name; }
  get country() { return this._country; }
  get stateProvince() { return this.stateProvince; }
  get city() { return this._city; }
}

module.exports = Publisher;
