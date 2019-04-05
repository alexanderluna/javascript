const { app, BrowserWindow, Menu, ipcMain } = require('electron');

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
  addWindow.on('closed', () => {
    addWindow = null;
  });
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

function clearTodos() {
  mainWindow.webContents.send('todoClear');
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
      { role: 'reload' },
      {
        label: 'new todo',
        accelerator: 'Command+N',
        click() { createAddWindow(); },
      },
      {
        label: 'clear todos',
        accelerator: 'Command+K',
        click() { clearTodos(); },
      },
    ],
  },
];

function createMenu() {
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

ipcMain.on('todoAdd', (event, todo) => {
  mainWindow.webContents.send('todoAdd', todo);
  addWindow.close();
});

app.on('ready', () => {
  createWindow();
  createMenu();
});
