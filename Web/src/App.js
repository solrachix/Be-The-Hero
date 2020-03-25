import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Logon from './pages/Logon';

import Light from './styles/themes/Light';

function App() {
  const [ theme, setTheme ] = useState(Light);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Logon />
    </ThemeProvider>
  );
}

export default App;
