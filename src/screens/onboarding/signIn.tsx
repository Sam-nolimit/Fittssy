/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BottomComponent from '../../components/bottom';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/text';
import {AuthContext} from '../../context/authContext';

const SignIn = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const navigation = useNavigation();

  const {login} = useContext(AuthContext);

  const handlePress = () => {
    login();
    // navigation.navigate('Dashboard');
  };
  
  const handleSignInPress = () => {
    navigation.navigate('SignUp');
  };
  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };
  const togglePasswordVisibility = field => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };
  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <CustomText
          bold={true}
          italic={false}
          style={{color: 'white', fontSize: 25}}>
          Welcome back!
        </CustomText>

        <View style={styles.inputContainer}>
          <Text style={[styles.inputText, isFocused && styles.focusedText]}>
            Email Address
          </Text>
          <View style={[styles.nameSection, isFocused && styles.focusedBorder]}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="white"
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={username => setUserName(username)}
              value={username}
              onFocus={() => setIsFocused(true)} // Set isFocused to true on focus
              onBlur={() => setIsFocused(false)} // Set isFocused to false on blur
            />
          </View>
        </View>
        {/* Add error message or validation here if needed */}

        <Text
          style={[styles.inputText, isFocusedPassword && styles.focusedText]}>
          Password
        </Text>
        <View
          style={[
            styles.nameSection,
            isFocusedPassword && styles.focusedBorder,
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="white"
              secureTextEntry={!passwordVisible}
              underlineColorAndroid="transparent"
              onChangeText={password => setPassword(password)}
              value={password}
              onFocus={() => setIsFocusedPassword(true)}
              onBlur={() => setIsFocusedPassword(false)}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility('password')}>
              <Image
                style={{height: 20, width: 20, tintColor: '#A7A6A6'}}
                source={
                  passwordVisible
                    ? require('../../assets/icons/eye.png')
                    : require('../../assets/icons/eye-crossed.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* Text component to display error */}
        <TouchableOpacity
          onPress={handleForgotPasswordPress}
          activeOpacity={1}
          style={{flex: 1, alignItems: 'flex-end', paddingTop: 10}}>
          <Text style={styles.signInText}>Forgot Password? </Text>
        </TouchableOpacity>
        <View style={styles.bottomContainer}>
          <BottomComponent title="Sign In" onPress={handlePress} />
        </View>
        <View style={styles.divider}>
          <View style={styles.underline} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Google"
            // onPress={handlePress}
            backgroundColor="#222222"
            icon={require('../../assets/icons/appleIcon.png')}
            iconSize={24}
          />
        </View>
        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Apple ID"
            // onPress={handlePress}
            backgroundColor="#222222"
            icon={require('../../assets/icons/googleIcon.png')}
            iconSize={24}
          />
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={handleSignInPress} activeOpacity={1}>
            <Text style={styles.optionText}>
              Don’t have an account yet?
              <Text style={styles.signInText}> Sign up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#060404',
    paddingTop: 81,
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
