// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1255AE', // Customize your primary color here
    },
    secondary: {
      main: '#FCB300', // Customize secondary color
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      {' '}
      {/* Provide the theme */}
      <App />
    </ThemeProvider>
  </StrictMode>
);
