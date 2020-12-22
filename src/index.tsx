import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

/* importando o provider do hook personalizado */
import { ThemeProvider } from './hooks/theme';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>

      <App />

    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


