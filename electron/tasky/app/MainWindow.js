const { BrowserWindow } = require('electron');

class MainWindow extends BrowserWindow {
  constructor() {
    super({
      height: 500,
      width: 300,
      frame: false,
      resizable: false,
      show: false,
      webPreferences: {
        backgroundThrottling: false,
        nodeIntegration: true,
      },
    });
    this.loadURL('http://localhost:3000');
    this.on('blur', this.hide);
  }
}

module.exports = MainWindow;
