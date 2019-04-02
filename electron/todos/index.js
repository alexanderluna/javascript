const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;
let addWindow;

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 500,
    height: 300,
    title: 'Add Todo',
    webPreferences: { nodeIntegration: true },
  });
  if (process.env.NODE_ENV !== 'production') {
    addWindow.webContents.openDevTools();
  }
  addWindow.loadFile('add.html');
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
  if (process.env.NODE_ENV !== 'development') {
    mainWindow.webContents.openDevTools();
  }
  mainWindow.loadFile('main.html');
  mainWindow.on('closed', () => app.quit());
}

const menuTemplate = [
  ...(process.platform === 'darwin' ? [{
    label: app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  }] : []),
  {
    label: 'file',
    submenu: [
      {
        label: 'new todo',
        accelerator: 'Command+N',
        click() { createAddWindow(); },
      },
    ],
  },
];

function createMenu() {
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on('ready', () => {
  createWindow();
  createMenu();
});
