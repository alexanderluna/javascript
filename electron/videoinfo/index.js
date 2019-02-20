const { app, BrowserWindow, ipcMain } = require('electron');
const ffmpeg = require('fluent-ffmpeg');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('index.html');
}

ipcMain.on('videoSubmit', (event, path) => {
  ffmpeg.ffprobe(path, (err, metadata) => {
    if (err) throw new Error('Couldn\'t analyze video');
    console.log(metadata);
    mainWindow.webContents.send('videoAnalyzed', metadata);
  });
});

app.on('ready', () => {
  createWindow();
});
