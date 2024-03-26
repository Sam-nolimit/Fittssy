import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import FirstScreen from '../../src/screens/splashScreen/firstScreen';
// import {NavigationContainer} from '@react-navigation/native';
import SignUp from '../../src/screens/onboarding/signUp';
import SignIn from '../../src/screens/onboarding/signIn';
import ForgotPassword from '../../src/screens/onboarding/forgotPassword';
import Verification from '../../src/screens/onboarding/verication';
import Dashboard from '../screens/dashboard/startWorkout';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={FirstScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default AuthStack;
