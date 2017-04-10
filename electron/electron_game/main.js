const electron = require('electron');
// Module to control application life.
const {app} = electron;
// Module to create native browser window.
const {BrowserWindow} = electron;

// Global reference of the window object due to GC
let win;

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);

  // when the window is closed.
  win.on('closed', () => {
    // Dereference the window object
    win = null;
  });
}


app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});

// Rest of main process | can also be in seperate files and required here
