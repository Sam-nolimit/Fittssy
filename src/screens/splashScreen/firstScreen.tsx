/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import BottomComponent from '../../components/bottom';
import {useNavigation} from '@react-navigation/native';

const FirstScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigation = useNavigation();

  const images = [
    require('../../assets/media/Splash/Splash.png'),
    require('../../assets/media/Splash/Splash1.png'),
    require('../../assets/media/Splash/Splash2.png'),
    require('../../assets/media/Splash/Splash3.png'),
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 6000);

    return () => clearInterval(intervalId);
  }, []);

  const handlePress = () => {
    navigation.navigate('SignUp');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground
      style={styles.imageBackground}
      source={images[currentImageIndex]}>
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'NicoMoji-Regular',
            fontWeight: '800',
            fontSize: 44,
            color: 'white',
            paddingVertical: 20,
          }}>
          Fittssy
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <BottomComponent title="Get Started" onPress={handlePress} />
        <TouchableOpacity onPress={handleSignInPress} activeOpacity={1}>
          <Text style={styles.optionText}>
            Already have an account?{' '}
            <Text style={styles.signInText}>Sign in</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: Dimensions.get('screen').height,
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    paddingVertical: 80,
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 62,
    paddingHorizontal: 20,
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Karla-Regular',
    paddingTop: 20,
    textAlign: 'center',
  },
  signInText: {
    color: '#28CC9E',
    fontFamily: 'Karla-ExtraBold',
  },
});

export default FirstScreen;
