const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API to the renderer process
contextBridge.exposeInMainWorld('electron', {
  // Function to toggle the timer state (start/stop)
  toggleTimer: () => ipcRenderer.send('toggle-timer'),

  // Function to listen for timer status updates (running or stopped)
  onTimerStatus: (callback) => {
    ipcRenderer.on('timer-status', (event, isRunning) => {
      callback(isRunning);
    });
  },

  // Function to listen for session data updates (start time, end time, interval)
  onSessionData: (callback) => {
    ipcRenderer.on('session-data', (event, sessionData) => {
      callback(sessionData);
    });
  },

  // Function to send key logs data from the renderer to the main process
  saveKeyLogs: (data) => ipcRenderer.send('save-key-logs', data),

  // Function to send mouse logs data from the renderer to the main process
  saveMouseLogs: (data) => ipcRenderer.send('save-mouse-logs', data),
});
