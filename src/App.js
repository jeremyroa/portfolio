import React from 'react';
import './App.css';
import Landing from './pages/landing/Landing';
import { ThemeProvider } from '@material-ui/core';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Landing />
    </ThemeProvider>
  );
}

export default App;
