import React from 'react';
import {Dimensions} from 'react-native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './components/DrawerContent'

import HomeScreen from '../screens/Home';
import FavouritesScreen from '../screens/Favourites';

const {width} = Dimensions.get('window')
const DRAWER_WIDTH = width * 0.7;

export type MainNavigatorRoutes = {
    OutfitIdeas: undefined,
    FavouriteOutfits: undefined
}

const MainDrawer = createDrawerNavigator<MainNavigatorRoutes>();


const MainNavigator = () => {
  return (
      <MainDrawer.Navigator
        drawerStyle={{
            width: DRAWER_WIDTH,
        }}
        drawerContent={(props) => <DrawerContent {...props}/>} 
      >
        <MainDrawer.Screen name="OutfitIdeas" component={HomeScreen} />
        <MainDrawer.Screen name="FavouriteOutfits" component={FavouritesScreen} />
      </MainDrawer.Navigator>
  );
}

export default MainNavigator;