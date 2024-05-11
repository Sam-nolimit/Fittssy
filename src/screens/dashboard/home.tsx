/* eslint-disable react-native/no-inline-styles */
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../components/header';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Overlay from '../../components/overlay';
import Drawer from '../../components/drawer';
import AtmCard from '../../components/atmCard';

export const Home = () => {
  const active = useSharedValue(false);
  const progress = useDerivedValue(() => {
    return withTiming(active.value ? 1 : 0);
  });
  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -15],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        {
          perspective: 2000,
        },
        {
          scale: active.value ? withTiming(0.8) : withTiming(1),
        },
        {
          translateX: active.value ? withSpring(240) : withTiming(0),
        },
        {
          rotateY: `${rotateY}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(50) : withTiming(0),
    };
  });

  return (
    <>
      <Drawer active={active} />
      <Animated.View style={[animatedStyle, styles.animatedView]}>
        <ImageBackground
          style={styles.imageBackground}
          resizeMode="center"
          source={require('../../assets/media/Home/backgroundMain.png')}>
          <StatusBar translucent={false} barStyle="light-content" />
          <Header active={active} title={''} />
          <ScrollView contentContainerStyle={styles.mainContainer}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                gap: 40,
              }}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 35,
                  fontFamily: 'Karla-ExtraBold',
                }}>
                Go!
              </Text>
              <Text
                style={{
                  color: 'white',
                  fontSize: 24,
                  fontFamily: 'Karla-Regular',
                }}>
                Est. 1h 9 min!
              </Text>
              <View>
                <Image
                  source={require('../../assets/media/Home/primaryBackground.png')}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 10,
                marginBottom: 30,
              }}>
              <Text
                style={{
                  color: 'gray',
                  fontSize: 22,
                  fontFamily: 'Karla-SemiBold',
                }}>
                Workout log is empty
              </Text>
            </View>
            <AtmCard />
          </ScrollView>
          <Overlay active={active} />
        </ImageBackground>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    overflow: 'hidden',
  },
  mainContainer: {
    backgroundColor: '#06040415',
    paddingTop: 10,
    paddingBottom: 40,
  },
  imageBackground: {
    width: '100%',
    height: Dimensions.get('screen').height,
    backgroundColor: '#060404',
  },
  image: {
    width: 300,
    height: 433,
    marginBottom: 50,
  },
  option: {
    borderRadius: 20,
    borderColor: '#28CC9E',
    borderWidth: 2,
    padding: 10,
    width: 161,
  },
  optionText: {
    color: '#28CC9E',
    textAlign: 'center',
    fontSize: 15,
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#28CC9E',
    borderWidth: 2,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleIcon2: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: '#28cc9e1c',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  circleIcon: {
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#2db18c74',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: '#28CC9E',
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
