const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadFile('public/index.html');
}

app.on('ready', () => {
  createMainWindow();
});
