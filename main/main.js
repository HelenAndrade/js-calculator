// In JS convention, PascalCase modules are instantiable class constructors
// whereas camelCase modules are not instantiable
const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("node:path");
const createWindow = () => {
  const win = new BrowserWindow({
    width: 350,
    height: 600
  });
  win.loadFile("renderer/index.html");
  Menu.setApplicationMenu(null);
};

app.whenReady().then(() => {
  createWindow();
});
