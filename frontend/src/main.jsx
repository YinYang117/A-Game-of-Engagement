import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './css/globals/global.css';
import './css/globals/globalColorTheme.css';
import './css/globals/globalFontTheme.css';

let colorTheme = "theme-cool";
let fontTheme = "font-github";
// When user signin is used, pull from user data, state, or local storage
document.body.classList.add(colorTheme, fontTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);