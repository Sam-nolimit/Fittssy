/* eslint-disable react/react-in-jsx-scope */
import react, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isloading, setIsloading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const login = () => {
    setIsloading(true);
    setUserToken('ddfgggd');
    AsyncStorage.setItem('userToken', 'ddfgggd');
    setIsloading(false);
  };
  const logOut = () => {
    setIsloading(true);
    AsyncStorage.removeItem('userToken', error => {
      if (error) {
        console.log('Error removing userToken:', error);
      } else {
        setUserToken(null);
        setIsloading(false);
      }
    });
  };

  const isLoggedIn = async () => {
    try {
      setIsloading(true);
      let userToken = await AsyncStorage.getItem('userToken', userToken);
      setUserToken(userToken);
      setIsloading(true);
    } catch (error) {
      console.log(`Islogged in error ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{login, logOut, isloading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
