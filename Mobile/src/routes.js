import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const { Navigator, Screen  } = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function src() {
  return (
    <NavigationContainer>

      <Navigator
        initialRouteName="Incidents"
        // headerMode="none"
        screenOptions={{
          headerShown: false,
        //     headerStyle: {
        //         // backgroundColor: themeContext.secundary,
        //         height: 60,
        //     },
        //     gestureEnabled: true,
        //     cardOverlayEnabled: true,                    
        //     // headerStyle: { backgroundColor: themeContext.secundary },
        //     ...TransitionPresets.ModalPresentationIOS,
        }}    
        // mode="modal"
      >
        <Screen name="Incidents" component={Incidents} />
        <Screen 
          name="Detail"
          component={Detail}
          options={{
            headerShown: false,
              headerStyle: {
                  // backgroundColor: themeContext.secundary,
                  height: 60,
              },
              gestureEnabled: true,
              cardOverlayEnabled: true,                    
              // headerStyle: { backgroundColor: themeContext.secundary },
              ...TransitionPresets.ModalPresentationIOS,
          }}
          mode="modal"
        />
      </Navigator>

    </NavigationContainer>
  );
}
