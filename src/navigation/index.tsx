import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Navigators
import OnBoardingNavigator from './Onboarding';
import MainNavigator from './Main'; 

export type RootRoutes = {
    Onboarding: undefined;
    Home: undefined;
}

const AppRootStack = createStackNavigator<RootRoutes>()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <AppRootStack.Navigator headerMode="none" initialRouteName="Home">
                <AppRootStack.Screen name="Onboarding" component={OnBoardingNavigator} />
                <AppRootStack.Screen name="Home" component={MainNavigator} />
            </AppRootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;