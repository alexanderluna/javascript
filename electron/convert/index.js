const { app, BrowserWindow, ipcMain } = require('electron');
const ffmpeg = require('fluent-ffmpeg');
const _ = require('lodash');

app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      backgroundThrottling: false,
      nodeIntegration: true,
    },
  });

  mainWindow.loadURL('http://localhost:3000');
});

ipcMain.on('videosAdded', (event, videos) => {
  const promises = _.map(videos, (video) => {
    return new Promise((resolve, reject) => {
      ffmpeg.ffprobe(video.path, (err, metadata) => {
        if (err) reject(err);
        resolve({
          ...video,
          duration: metadata.format.duration,
          format: 'avi'
        });
      });
    });
  });

  Promise.all(promises)
    .then((results) => {
      mainWindow.webContents.send('metadataComplete', results)
    });
});
