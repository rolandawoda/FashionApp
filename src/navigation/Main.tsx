import React from 'react';
import {Dimensions} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent'

import HomeScreen from '../screens/Home';

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
        <MainDrawer.Screen name="Home" component={HomeScreen} />
      </MainDrawer.Navigator>
  );
}

export default MainNavigator;