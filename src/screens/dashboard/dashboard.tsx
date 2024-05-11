/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyPlans from './myPlans';
import Progress from './progress';
import Insight from './insight';
import Profile from './profile';
import {Home} from './home';

const Tab = createBottomTabNavigator();

const homeIcon = require('../../assets/icons/home.png');
const homeIcon2 = require('../../assets/icons/home2.png');
const myPlansIcon = require('../../assets/icons/dumbbell.png');
const myPlansIcon2 = require('../../assets/icons/dumbbell2.png');
const ProgressIcon = require('../../assets/icons/calender-fill.png');
const ProgressIcon2 = require('../../assets/icons/calendar-fill2.png');
const InsightIcon = require('../../assets/icons/insight.png');
const InsightIcon2 = require('../../assets/icons/insight.png');
const profileIcon = require('../../assets/icons/profile.png');
const profileIcon2 = require('../../assets/icons/profile.png');

export default function MainDasboard() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? homeIcon2 : homeIcon;
          } else if (route.name === 'My Plans') {
            iconName = focused ? myPlansIcon2 : myPlansIcon;
          } else if (route.name === 'Progress') {
            iconName = focused ? ProgressIcon : ProgressIcon2;
          } else if (route.name === 'Insight') {
            iconName = focused ? InsightIcon2 : InsightIcon;
          } else if (route.name === 'Profile') {
            iconName = focused ? profileIcon2 : profileIcon;
          }
          return (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={focused ? styles.circleIcon2 : null}>
                <View style={focused ? styles.circleIcon : null}>
                  <View style={focused ? styles.innerCircle : null}>
                    <Image
                      source={iconName}
                      resizeMode="contain"
                      style={{width: 35, height: 30}}
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        },
        headerShown: false,
        tabBarLabel: '',
        tabBarStyle: {
          paddingTop: 34,
          backgroundColor: '#1a1818',
          position: 'absolute',
          left: 20,
          right: 20,
          borderRadius: 20,
          borderTopWidth: 0,
          borderColor: 'red',
          marginBottom: 13,
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Plans" component={MyPlans} />
      <Tab.Screen name="Progress" component={Progress} />
      <Tab.Screen name="Insight" component={Insight} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
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
    borderColor: '#28cc9e74',
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
