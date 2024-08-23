// DOM elements for displaying timer information
const toggleButton = document.getElementById('toggleButton');
const startTime = document.getElementById('startTime');
const stopTime = document.getElementById('stopTime');
const durationTime = document.getElementById('durationTime');

// Path to the custom notification sound
const notificationSound = new Audio('./assets/sounds/notification.mp3');

// Add an event listener to check if the audio can play
notificationSound.addEventListener('canplaythrough', () => {
  console.log('Notification sound is loaded and can be played.');
});

// Add an event listener for any errors during audio playback
notificationSound.addEventListener('error', (e) => {
  console.error('Error occurred while trying to play notification sound:', e);
});

// Event listener for the toggle button to start/stop the timer
toggleButton.addEventListener('click', () => {
  window.electron.toggleTimer(); // Call the toggleTimer function from the exposed API
});

// Listen for updates to the timer status and update the button text accordingly
window.electron.onTimerStatus((isRunning) => {
  toggleButton.textContent = isRunning ? 'Stop Timer' : 'Start Timer';
});

// Listen for session data updates and display the information in the DOM
window.electron.onSessionData((data) => {
  startTime.textContent = data.startTime || '00:00:00';
  stopTime.textContent = data.endTime || '00:00:00';
  durationTime.textContent = data.interval || '00:00:00';
});

// Listen for the IPC message from the main process to play the notification sound
window.electron.ipcRenderer.on('play-notification-sound', () => {
  console.log('Received play-notification-sound IPC message');
  notificationSound
    .play()
    .then(() => {
      console.log('Notification sound played successfully.');
    })
    .catch((error) => {
      console.error('Failed to play notification sound:', error);
    });
});
