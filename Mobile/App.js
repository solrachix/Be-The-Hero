import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import {name as appName} from './app.json';

import React, { useState } from 'react';
import { AppRegistry, StatusBar } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';

import { TransitionPresets } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import CustomDrawerContent from './src/components/CustomDrawerContent';

const Drawer = createDrawerNavigator();
import Routes from './src/routes';

import Light from './src/styles/themes/Light';

export default function App() {
  const [theme, setTheme] = useState(Light);
  // const [theme, setTheme] = usePersistedState('theme', Light);

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <StatusBar hidden />

        <NavigationContainer theme={theme}>
          <Drawer.Navigator 
            drawerContent={props => <CustomDrawerContent setTheme={setTheme} {...props} />}
            initialRouteName="Routes"
            screenOptions={{
              gestureEnabled: true,
                  cardOverlayEnabled: true,                    
                  // headerStyle: { backgroundColor: themeContext.secundary },
                  ...TransitionPresets.SlideFromRightIOS,
            }}
            >
            <Drawer.Screen name="Routes" component={Routes} />
          </Drawer.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

console.disableYellowBox = false

AppRegistry.registerComponent(appName, () => App);
