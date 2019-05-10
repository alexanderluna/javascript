const { Menu, Tray } = require('electron');

class TimerTray extends Tray {
  constructor(imageFilePath, mainWindow) {
    super(imageFilePath);
    this.mainWindow = mainWindow;
    this.setToolTip('Tasky');
    this.on('click', this.toggleView);
    this.on('right-click', this.showMenu);
  }

  toggleView = (_, { x, y }) => {
    if (this.mainWindow.isVisible()) {
      this.mainWindow.hide();
    } else {
      const { height, width } = this.mainWindow.getBounds();
      this.mainWindow.show();
      this.mainWindow.setBounds({
        x: x - width / 2,
        y: process.platform === 'darwin' ? y : y - height,
      });
    }
  }

  showMenu = () => {
    const menuConfig = Menu.buildFromTemplate([{ role: 'quit' }]);
    this.popUpContextMenu(menuConfig);
  }
}

module.exports = TimerTray;
