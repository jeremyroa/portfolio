import React from 'react';
import './App.css';
import Landing from './pages/landing/Landing';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './config/theme';

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </>
  );
}

export default App;
