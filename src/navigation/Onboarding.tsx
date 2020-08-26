import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


//screens;
import OnboardingScreen from '../screens/OnboardingScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import PasswordChangeSuccessfulScreen from '../screens/PasswordChangeSuccessfulScreen';

 export type OnBoaringStackRoutes = {
    Onboarding: undefined,
    Welcome: undefined,
    Login: undefined,
    Signup: undefined,
    ForgotPassword: undefined,
    PasswordChanged: undefined
}

const OnBoaringStack = createStackNavigator<OnBoaringStackRoutes>()


const OnboardingNavigator = () => {
    return (
        <OnBoaringStack.Navigator headerMode="none">
            <OnBoaringStack.Screen name="Onboarding" component={OnboardingScreen} />
            <OnBoaringStack.Screen name="Welcome" component={WelcomeScreen} />
            <OnBoaringStack.Screen name="Login" component={LoginScreen} />
            <OnBoaringStack.Screen name="Signup" component={SignupScreen} />
            <OnBoaringStack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
            <OnBoaringStack.Screen name="PasswordChanged" component={PasswordChangeSuccessfulScreen} />
        </OnBoaringStack.Navigator>
    )
}

export default OnboardingNavigator;