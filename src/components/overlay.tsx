import {View, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

type Props = {
  active: SharedValue<boolean>;
};

const Overlay = ({active}: Props) => {
  const Icon = require('../assets/icons/menu-burger.png');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      display: active.value ? 'flex' : 'none',
    };
  });
  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Pressable
        style={styles.circle}
        onPress={() => {
          active.value = false;
        }}>
        <View style={styles.area}>
          <Image source={Icon} style={styles.icon} />
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 23,
    padding: 20,
    paddingTop: 60,
  },
  icon: {
    width: 25,
    height: 25,
  },
  area: {
    width: 46,
    height: 46,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    borderRadius: 23,
  },
});

export default Overlay;
