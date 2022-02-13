import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
import DrawerCustom from '../components/DrawerCustom';

import WallScreen from '../screens/WallScreen';

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerCustom {...props} />}
      screenOptions={{
        headerShown: true,
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#F5F6FA',
          shadowOpacity: 0,
          elevation: 0,
        },
      }}>
      <Drawer.Screen name="WallScreen" component={WallScreen} />
    </Drawer.Navigator>
  );
};
