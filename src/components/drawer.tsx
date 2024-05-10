import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DrawerItem from './drawerList';
import {SharedValue} from 'react-native-reanimated';

type Props = {
  active: SharedValue<boolean>;
};
const drawList = [
  {
    id: 1,
    title: 'Home',
    icon: require('../assets/icons/home.png'),
    navigate: 'Home',
  },
  {
    id: 1,
    title: 'My Plan',
    icon: require('../assets/icons/home.png'),
    navigate: 'My Plans',
  },
  {
    id: 2,
    title: 'History',
    icon: require('../assets/icons/home.png'),
    navigate: 'Progress',
  },
  {
    id: 3,
    title: 'Insight',
    icon: require('../assets/icons/home.png'),
    navigate: 'Insight',
  },
  {
    id: 4,
    title: 'Profile',
    icon: require('../assets/icons/home.png'),
    navigate: 'Profile',
  },
];
const Drawer = ({active}: Props) => {
  const Icon = require('../assets/icons/profile.png');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <View style={styles.containerProfile}>
            <Image source={Icon} style={styles.icon} />
            <Text style={styles.textName}>Sarah Wegan</Text>
          </View>
        </View>
        <View style={styles.containerItem}>
          {drawList.map((item, index) => (
            <DrawerItem key={index} item={item} active={active} />
          ))}
        </View>
      </View>
    </>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    backgroundColor: '#04453374',
    zIndex: -999,
  },
  icon: {
    width: 60,
    height: 60,
  },
  contentContainer: {
    paddingTop: 70,
    marginHorizontal: 10,
    maxWidth: 150,
    // backgroundColor: 'yellow',
  },
  containerProfile: {
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    paddingBottom: 14,
  },
  textName: {
    fontFamily: '',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  containerItem: {
    marginTop: 10,
  },
});
