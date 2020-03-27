import React, { useContext } from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons/';

import { ThemeContext } from 'styled-components';
import Light from '../../styles/themes/Light';
import Dark from '../../styles/themes/Dark';

export default function CustomDrawerContent({ setTheme, ...props}) {
  const themeContext = useContext(ThemeContext);

  function handleSetTheme(){
    // console.log('==>', themeContext.title);
    
    setTheme(themeContext.title == 'Light' ? Dark : Light);
  }
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        labelStyle={{
          // backgroundColor: "#f00"
        }}
        style={{
          justifyContent: "space-between",
          // alignItems: "center",
        }}
        label="Theme"
        icon={({ color, size }) => <Feather color={color} size={size} name={"sun"} />}
        onPress={handleSetTheme}
      />
    </DrawerContentScrollView>
  );
}
