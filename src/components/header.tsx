import React from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated'; // Import SharedValue
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface HeaderProps {
  title: string;
  showOption?: boolean; // Optional prop to determine whether to show the second TouchableOpacity
  active: SharedValue<boolean>; // Use SharedValue type
}

const Header: React.FC<HeaderProps> = ({title, showOption = false, active}) => {
  // Correct typo here
  const Icon = require('../assets/icons/menu-burger.png');

  const goBack = () => {
    active.value = true;
    console.log('HEADER MENU PRESSED!!!!!!!!!!!!', active.value);
  };
  const inset = useSafeAreaInsets();

  return (
    <Animated.View style={[styles.header, {paddingTop: inset.top}]}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={goBack}
        style={styles.circle}>
        <Image source={Icon} style={styles.icon} />
      </TouchableOpacity>
      {/* <Text style={styles.title}>{title}</Text>
      {showOption && (
        <TouchableOpacity onPress={goBack} style={styles.option}>
          <Text style={styles.optionText}>{title}</Text>
        </TouchableOpacity>
      )} */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#28CC9E',
    padding: 20,
  },
  circle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Karla-ExtraBold',
    color: 'white',
  },
  option: {
    borderRadius: 20,
    borderColor: '#28CC9E',
    borderWidth: 2,
    padding: 10,
  },
  optionText: {
    color: '#28CC9E',
  },
});

export default Header;
