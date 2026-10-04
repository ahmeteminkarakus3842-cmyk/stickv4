const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({ width: 1280, height: 720, backgroundColor: '#000000', autoHideMenuBar: true, title: 'Stickman Fighter',
    webPreferences: { contextIsolation: true } });
  Menu.setApplicationMenu(null);
  win.loadFile(path.join(__dirname, '..', 'www', 'index.html'));
  win.webContents.on('before-input-event', (e, i) => {
    if (i.type !== 'keyDown') return;
    if (i.key === 'F11') win.setFullScreen(!win.isFullScreen());
    if (i.key === 'F12' && i.control) win.webContents.toggleDevTools();
  });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
