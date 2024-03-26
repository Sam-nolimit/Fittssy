import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Header from '../../components/header';

const Dashboard = () => {
  return (
    <ImageBackground
      style={styles.imageBackground}
      resizeMode="center"
      source={require('../../assets/media/Home/background.png')}>
      <KeyboardAwareScrollView contentContainerStyle={styles.mainContainer}>
        {/* <Header /> */}
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
            style={{color: 'white', fontSize: 24, fontFamily: 'Karla-Regular'}}>
            Est. 1h 9 min!
          </Text>
          <View>
            <Image
              source={require('../../assets/media/Home/secondaryBackground.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            marginBottom: 30,
          }}>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Not Ready</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.circle}>
            <Text style={styles.optionText}>15</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ImageBackground>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: '#060404',
    paddingTop: 100,
    paddingHorizontal: 20,
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
});
