const { app, BrowserWindow } = require('electron');

require('electron-reloader')(module);

let win;

path = require('path');

app.on('ready', () => {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        }
    });

    win.loadFile('index.html');
    win.setMenu(null);

});