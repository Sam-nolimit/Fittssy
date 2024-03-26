/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {AuthProvider} from './src/context/authContext';
import AppNav from './src/navigation/appNav';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

export default App;
