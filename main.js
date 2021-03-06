const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  
  win = new BrowserWindow({show: false})
  win.once('ready-to-show', () => { win.maximize() })

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  //win.webContents.openDevTools()

  win.on('closed', () => { win = null })
  
}

app.on('ready', createWindow)
app.on('window-all-closed', () => { app.quit() })
