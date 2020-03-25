import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';

import Light from './styles/themes/Dark';

function App() {
  const [ theme, setTheme ] = useState(Light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
