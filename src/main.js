'use strict';

// NATIVE IMPORTS
const path = require('path');

// MODULE IMPORTS
const Main = require('./electron/Main');

// GLOBALS
const INDEX_PAGE_PATH = path.resolve(__dirname, './renderer/index.html');

new Main(INDEX_PAGE_PATH);
