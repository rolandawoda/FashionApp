import React from 'react';
import {Dimensions} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent'

import TestScreen from '../screens/TestScreen';

const {width} = Dimensions.get('window')
const DRAWER_WIDTH = width * 0.7

const MainDrawer = createDrawerNavigator();


const MainNavigator = () => {
  return (
      <MainDrawer.Navigator
        drawerStyle={{
            width: DRAWER_WIDTH,
        }}
        drawerContent={(props) => <DrawerContent {...props}/>} 
      >
        <MainDrawer.Screen name="Home" component={TestScreen} />
      </MainDrawer.Navigator>
  );
}

export default MainNavigator;