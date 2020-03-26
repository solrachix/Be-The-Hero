import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes';
import {name as appName} from './app.json';

import Light from './src/styles/themes/Light';

export default function App() {
  // const [theme, setTheme] = usePersistedState('theme', Light);
  const theme = Light;
  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden />
      <Routes theme={theme} /> 
    </ThemeProvider>
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);
