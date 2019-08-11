const { remote, shell } = require('electron');

const template = [
  ...(process.platform === 'darwin' ? [{
    label: remote.app.getName(),
    submenu: [
      { role: 'about' },
      { type: 'separator' },
      { role: 'services' },
      { type: 'separator' },
      { role: 'hide' },
      { role: 'hideothers' },
      { role: 'unhide' },
      { type: 'separator' },
      { role: 'quit' },
    ],
  }] : []),
  {
    label: 'Items',
    submenu: [
      {
        label: 'Add New Item',
        click: window.newItem,
        accelerator: 'CmdOrCtrl+N',
      },
      {
        label: 'Open Item',
        click: window.openItem,
        accelerator: 'CmdOrCtrl+O',
      },
      {
        label: 'Delete Item',
        click: window.deleteItem,
        accelerator: 'CmdOrCtrl+Backspace',
      },
      {
        label: 'Open in Browser',
        click: window.openInBrowser,
        accelerator: 'CmdOrCtrl+Shift+O',
      },
      {
        label: 'Search Item',
        click: window.searchItems,
        accelerator: 'CmdOrCtrl+S',
      },
    ],
  },
  {
    role: 'editMenu',
  },
  {
    role: 'windowMenu',
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn more',
        click: () => {
          shell.openExternal('https://github.com/alexanderluna');
        },
      },
    ],
  },
];


const menu = remote.Menu.buildFromTemplate(template);

remote.Menu.setApplicationMenu(menu);
