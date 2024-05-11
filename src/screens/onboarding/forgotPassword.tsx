import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CustomText from '../../components/text';
import {useNavigation} from '@react-navigation/native';
import BottomComponent from '../../components/bottom';
import Header from '../../components/headerGoback';
// import Header from '../../components/header';

const ForgotPassword = () => {
  const [username, setUserName] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handlePress = () => {
    // Simulate loading for 2 seconds
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Verification');
    }, 2000);
  };
// 123456
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Header option="use code" title="   " showOption="true" />
        <CustomText
          bold={true}
          italic={false}
          style={{color: 'white', fontSize: 25}}>
          Forgot Password?
        </CustomText>
        <CustomText
          bold={false}
          italic={false}
          style={{color: 'gray', fontSize: 15}}>
          Enter your email address to recover password.
        </CustomText>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputText, isFocused && styles.focusedText]}>
            Email Address or phone number
          </Text>
          <View style={[styles.nameSection, isFocused && styles.focusedBorder]}>
            <TextInput
              style={styles.input}
              placeholder=" Email Address or phone number"
              placeholderTextColor="white"
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={username => setUserName(username)}
              value={username}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <BottomComponent
            title={loading ? 'Sending' : 'Send'}
            onPress={handlePress}
            loading={loading}
          />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#060404',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    marginTop: 30,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    color: 'white',
    fontFamily: 'Karla-SemiBold',
    paddingHorizontal: 20,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 5,
  },
  nameSection: {
    flexDirection: 'column',
    borderColor: '#292929',
    borderRadius: 35,
    borderWidth: 1.5,
    marginVertical: 5,
    paddingLeft: 10,
    paddingRight: 40,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#171717',
  },
  inputText: {
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Karla-ExtraBold',
  },
  bottomContainer: {
    marginTop: 30,
    // bottom: 60,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  underline: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  orText: {
    color: 'gray',
    paddingHorizontal: 10,
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
  focusedBorder: {
    borderColor: '#28CC9E',
  },
  focusedText: {
    color: '#28CC9E',
  },
  bottom: {
    bottom: -230,
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
