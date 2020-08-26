import 'react-native-gesture-handler';
import React from 'react';

import OnboardingScreen from './src/screens/OnboardingScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import PasswordChangeSuccessfulScreen from './src/screens/PasswordChangeSuccessfulScreen';

import RootNavigator from './src/navigation';

export default function App() {
  return (
    <RootNavigator/>
  );
}
