'use strict';

// NATIVE IMPORTS
const path = require('path');

// DEPENDENCIES
const Electron = require('electron');

class Main {
  /**
   * @param {string} homepage - Absolute path to the index page
   */
  constructor(homepage) {
    /**
     * Absolute path to the index page.
     * @private
     */
    this._HOMEPAGE_PATH = homepage;
    /**
     * Electron app instance.
     * @private
     */
    this._app = Electron.app;
    /**
     * Absolute path to the preload script.
     * @private
     * @readonly
     */
    this._PRELOAD_SCRIPT_PATH = path.resolve(this._app.getAppPath(), './src/electron/preload.js');

    // Initialize main process
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
      backgroundColor: '#22222f',
      darkTheme: true,
      webPreferences: {
        // TODO: Turn on `contextIsolation` in the future.
        contextIsolation: false,
        enableRemoteModule: false,
        nodeIntegration: false,
        nodeIntegrationInSubFrames: false,
        nodeIntegrationInWorker: false,
        preload: this._PRELOAD_SCRIPT_PATH
      }
    }).once('closed', () => this._window = null);
    win.webContents.session
      .setPermissionRequestHandler((webContents, permission, callback) => callback(false));
    win.loadFile(this._HOMEPAGE_PATH);
    return win;
  }

  _initMenu() {
    const { Menu } = Electron;
    Menu.setApplicationMenu(null);
  }
}

module.exports = Main;
