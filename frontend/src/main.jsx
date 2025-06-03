import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/globals/global.css';
import './css/globals/globalTheme.css';
let colorTheme = "theme-dark" // When user signin is used, pull from user data, state, or local storage
document.body.className = colorTheme;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);