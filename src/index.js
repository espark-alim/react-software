import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



// Check if the app is running in Electron
function isElectron() {
  // In Electron, `window.process` will be available
  return typeof window !== 'undefined' && window.process && window.process.type === 'renderer';
}

if (isElectron()) {
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  console.error('This app is only designed to run within an Electron environment.');
  // Optionally, display a message to the user or redirect them to a different page.
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
