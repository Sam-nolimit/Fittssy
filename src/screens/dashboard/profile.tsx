/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthContext} from '../../context/authContext';

const Profile = props => {
  const {title, children, onPressBack, doNotShowBack} = props;
  const {logOut} = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollableContainer}
      resetScrollToCoords={{x: 0, y: 0}}
      scrollEnabled={false}>
      <View style={styles.contentViewBottom}>
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../assets/media/Home/profileImg.png')}
            style={styles.image}
          />
        </View>
        <Text style={styles.titleText}>Sarah Wegan</Text>
        <View style={styles.userStatusContainer}>
          <Image
            source={require('../../assets/icons/crown.png')}
            style={styles.imageSpot}
          />
          <Text style={styles.premiumText}>Premium User</Text>
        </View>
        <View style={styles.userJoinedContainer}>
          <Text style={styles.joinedText}>Joined:</Text>
          <Text style={styles.joinedTimeText}>2 months ago</Text>
        </View>

        <ScrollView style={styles.scrollView}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Edit Profile</Text>
            <Image
              source={require('../../assets/icons/right2.png')}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Privacy Policy</Text>
            <Image
              source={require('../../assets/icons/right2.png')}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Settings</Text>
            <Image
              source={require('../../assets/icons/right2.png')}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuItemText}>Subscription</Text>
            <Image
              source={require('../../assets/icons/right2.png')}
              style={styles.rightIcon}
            />
          </TouchableOpacity>
          <View style={{marginTop: 100}}>
            <TouchableOpacity
              style={{
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderBottomColor: '#292929',
                borderTopColor: '#292929',
                borderTopWidth: 1,
                height: 60,
              }}
              onPress={() => {
                logOut();
              }}>
              <Image
                source={require('../../assets/icons/log-out.png')}
                style={{height: 30, width: 30, marginHorizontal: 10}}
              />
              <Text style={[styles.menuItemText, {color: '#28CC9E'}]}>
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  scrollableContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    position: 'relative',
    paddingHorizontal: 10,
    backgroundColor: '#000000',
  },
  contentViewBottom: {
    height: '86.6%',
    marginTop: 55,
    width: '100%',
    borderRadius: 24,
  },
  profileImageContainer: {
    backgroundColor: 'gray',
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 22,
    lineHeight: 20 * 1,
    fontFamily: 'Karla-Bold',
    fontWeight: '800',
    textAlign: 'center',
    paddingBottom: 3,
    paddingTop: 10,
    color: 'white',
  },
  imageSpot: {
    height: 25,
    width: 25,
  },
  userStatusContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 100,
  },
  premiumText: {
    fontSize: 18,
    fontFamily: 'Karla-Regular',
    color: '#28CC9E',
    textAlign: 'center',
    paddingHorizontal: 5,
    fontWeight: '500',
  },
  userJoinedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 100,
  },
  joinedText: {
    fontSize: 16,
    fontFamily: 'Karla-Light',
    color: '#7D7C7C',
    textAlign: 'center',
    paddingHorizontal: 5,
    fontWeight: '400',
    paddingTop: 5,
  },
  joinedTimeText: {
    fontSize: 16,
    fontFamily: 'Karla-Light',
    color: '#7D7C7C',
    textAlign: 'center',
    paddingHorizontal: 5,
    fontWeight: '400',
    paddingTop: 5,
  },
  scrollView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  menuItem: {
    justifyContent: 'space-between',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#292929',
    marginBottom: 10,
    marginTop: 10,
  },
  menuItemText: {
    fontSize: 18,
    fontFamily: 'Karla-Bold',
    color: '#ffffff',
    paddingHorizontal: 5,
    alignItems: 'center',
    fontWeight: '600',
    height: 24,
  },
  rightIcon: {
    height: 15,
    width: 15,
  },
});
