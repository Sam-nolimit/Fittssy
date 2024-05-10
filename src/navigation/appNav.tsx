/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../context/authContext';
import {ActivityIndicator, View} from 'react-native';
import AppStack from './appStack';
import AuthStack from './authStack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const AppNav = () => {
  const {isLoading, userToken} = useContext(AuthContext);
  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        {userToken !== null ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default AppNav;
