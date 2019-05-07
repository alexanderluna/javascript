const { app, BrowserWindow } = require('electron');

let mainWindow;

function createMainWindow() {
  mainWindow = new BrowserWindow({
    height: 500,
    width: 300,
    frame: false,
    resizable: false,
  });
  mainWindow.loadURL('http://localhost:3000');
}

app.on('ready', () => {
  createMainWindow();
});
