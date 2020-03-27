import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';

import Routes from './routes';

import SetTheme from './components/SetTheme';
import Light from './styles/themes/Light';

function App() {
  const [ theme, setTheme ] = useState(Light);
  return (
    <ThemeProvider theme={theme}>
      <SetTheme setTheme={setTheme}/>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
