const { app, BrowserWindow, Menu } = require('electron');

let mainWindow;
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
      { label: 'new todo' },
    ],
  },
];

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });
  mainWindow.webContents.openDevTools();
  mainWindow.loadFile('main.html');
}

function createMenu() {
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on('ready', () => {
  createWindow();
  createMenu();
});
