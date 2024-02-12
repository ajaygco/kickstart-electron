// Modules
import { app, BrowserWindow } from "electron";

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  if (process.env.IS_DEV) {
    mainWindow.webContents.openDevTools();

    mainWindow.loadURL("http://localhost:5173");
  } else {
    mainWindow.loadFile("dist/index.html");
  }

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform === "darwin") {
    return;
  }

  app.quit();
});

app.on("activate", () => {
  if (mainWindow !== null) {
    return;
  }

  createWindow();
});
