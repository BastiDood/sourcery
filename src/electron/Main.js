'use strict';

// DEPENDENCIES
const Electron = require('electron');

class Main {
  /**
   * 
   * @param {string} homepage - Absolute path to the index page
   */
  constructor(homepage) {
    /**
     * Absolute path to the index page.
     * @private
     */
    this._homepage = homepage;
    /**
     * Electron app instance.
     * @private
     */
    this._app = Electron.app;
    this._initApp();
    this._initMenu();
  }

  _initApp() {
    this._app.once('ready', () => this._window = this._createWindow().maximize());
    this._app.once('window-all-closed', () => {
      if (process.platform !== 'darwin')
        this._app.quit();
    });
  }

  _createWindow() {
    const { BrowserWindow } = Electron;
    const win = new BrowserWindow({
      backgroundColor: '#000000'
    }).once('closed', () => this._window = null);
    win.loadFile(this._homepage);
    return win;
  }

  _initMenu() {
    const { Menu } = Electron;
    Menu.setApplicationMenu(null);
  }
}

module.exports = Main;
