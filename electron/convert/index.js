const {
  app, BrowserWindow, ipcMain, shell,
} = require('electron');
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
  const promises = _.map(videos, (video) => (
    new Promise((resolve, reject) => {
      ffmpeg.ffprobe(video.path, (err, { format: { duration } }) => {
        if (err) reject(err);
        resolve({ ...video, duration, format: 'avi' });
      });
    })
  ));

  Promise.all(promises)
    .then((results) => {
      mainWindow.webContents.send('metadataComplete', results);
    });
});

ipcMain.on('conversionStart', (event, videos) => {
  _.each(videos, (video) => {
    const outputDirectory = video.path.split(video.name)[0];
    const outputName = video.name.split('.')[0];
    const outputPath = `${outputDirectory}${outputName}.${video.format}`;

    ffmpeg(video.path)
      .output(outputPath)
      .on('progress', ({ timemark }) => {
        mainWindow.webContents.send('conversionProgress', { video, timemark });
      })
      .on('end', () => {
        mainWindow.webContents.send('conversionEnd', { video, outputPath });
      })
      .run();
  });
});

ipcMain.on('folderOpen', (event, outputPath) => {
  shell.showItemInFolder(outputPath);
});
