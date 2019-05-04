const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL('http://localhost:3000');
}

app.on('ready', () => {
  createMainWindow();
});
