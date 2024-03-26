/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Card = ({
  titleMain,
  headTitle,
  middleTitle,
}: {
  titleMain: string;
  headTitle: string;
  middleTitle: string;
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.mainContainer}>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            borderColor: '#28CC9E',
            height: 30,
            width: 70,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            borderWidth: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#28CC9E', textAlign: 'center'}}>
            {headTitle}
          </Text>
        </View>
        <Text
          style={{
            color: '#ffffff',
            textAlign: 'center',
            fontFamily: 'Karla-light',
            fontSize: 18,
          }}>
          {middleTitle}
        </Text>
        <Image
          source={require('../assets/icons/more-horizontal.png')}
          style={{height: 20, width: 20}}
        />
      </View>
      <Text
        style={{
          color: '#ffffff',
          textAlign: 'center',
          fontFamily: 'Karla-SemiBold',
          fontSize: 22,
        }}>
        {titleMain}
      </Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 20,
    borderColor: '#292929',
    height: 99,
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 16,
    borderWidth: 2,
  },
});
