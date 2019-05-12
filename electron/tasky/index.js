const path = require('path');
const { app, ipcMain } = require('electron');
const player = require('play-sound')();
const TimerTray = require('./app/TimerTray');
const MainWindow = require('./app/MainWindow');

app.commandLine.appendSwitch('disable-renderer-backgrounding');
app.commandLine.appendSwitch('disable-background-timer-throttling');

let mainWindow;
let tray;

app.on('ready', () => {
  app.dock.hide();
  mainWindow = new MainWindow();
  const imageFilePath = path.join(__dirname, 'assets', 'taskyIcon.png');
  tray = new TimerTray(imageFilePath, mainWindow);
});

ipcMain.on('timerUpdate', (_, timeLeft) => {
  tray.setTitle(timeLeft);
  if (timeLeft === '') {
    player.play('./assets/alarm.m4r');
  }
});
