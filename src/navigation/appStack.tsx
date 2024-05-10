import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TransitionPresets} from '@react-navigation/stack';

import Dashboard from '../../src/screens/dashboard/dashboard';
import MainDasboard from '../../src/screens/dashboard/dashboard';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: true,
        ...TransitionPresets.SlideFromRightIOS,
        // detachPreviousScreen: false,
      }}>
      <Stack.Screen
        name="Dashboard"
        component={MainDasboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
