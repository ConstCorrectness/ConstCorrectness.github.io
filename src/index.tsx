// allowSyntheticDefaultImports in tsconfig.json prevents us from having to
// namespace import.


import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import theme from './theme';


const root = createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

