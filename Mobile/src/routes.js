import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

const { Navigator, Screen  } = createStackNavigator();

import Incidents from './pages/Incidents';
import Detail from './pages/Detail';

export default function routes() {
  return (
    <Navigator
      initialRouteName="Incidents"
      headerMode="none"    
    >
      <Screen name="Incidents" component={Incidents} />
      <Screen 
        name="Detail"
        component={Detail}
        options={{
          gestureEnabled: true,
          cardOverlayEnabled: true,                    
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </Navigator>
  );
}
