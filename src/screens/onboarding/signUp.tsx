import React, {useState} from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import CustomText from '../../components/text';
import BottomComponent from '../../components/bottom';
import {useNavigation} from '@react-navigation/native';

const SignUp = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Dashboard');
  };

  const handleSignInPress = () => {
    navigation.navigate('SignIn');
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
      <StatusBar
        translucent={false}
        barStyle="light-content"
        backgroundColor={Platform.OS === 'ios' ? 'white' : 'red'}
      />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <CustomText
          bold={true}
          italic={false}
          style={{color: 'white', fontSize: 32}}>
          Create your account!
        </CustomText>
        <CustomText
          bold={false}
          italic={false}
          style={{color: 'gray', fontSize: 18}}>
          Enter your details to continue.
        </CustomText>

        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>Email Address</Text>
          <View style={styles.nameSection}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="white"
              keyboardType="default"
              underlineColorAndroid="transparent"
              onChangeText={username => setUserName(username)}
              value={username}
            />
          </View>
        </View>
        {/* Add error message or validation here if needed */}

        <Text style={styles.inputText}>Password</Text>
        <View style={styles.nameSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="white"
              secureTextEntry={!passwordVisible}
              underlineColorAndroid="transparent"
              onChangeText={password => setPassword(password)}
              value={password}
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

        <Text style={styles.inputText}>Confirm Password</Text>
        <View style={styles.nameSection}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="white"
              secureTextEntry={!confirmPasswordVisible}
              underlineColorAndroid="transparent"
              onChangeText={password => setConfirmPassword(password)}
              value={confirmPassword}
            />
            <TouchableOpacity
              onPress={() => togglePasswordVisibility('confirmPassword')}>
              <Image
                style={{height: 20, width: 20, tintColor: '#A7A6A6'}}
                source={
                  confirmPasswordVisible
                    ? require('../../assets/icons/eye.png')
                    : require('../../assets/icons/eye-crossed.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <BottomComponent title="Create an account" onPress={handlePress} />
        </View>
        <View style={styles.divider}>
          <View style={styles.underline} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.underline} />
        </View>
        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Google"
            onPress={handlePress}
            backgroundColor="#222222"
            icon={require('../../assets/icons/appleIcon.png')}
            iconSize={24}
          />
        </View>
        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Apple ID"
            onPress={handlePress}
            backgroundColor="#222222"
            icon={require('../../assets/icons/googleIcon.png')}
            iconSize={24}
          />
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={handleSignInPress} activeOpacity={1}>
            <Text style={styles.optionText}>
              Already have an account?{' '}
              <Text style={styles.signInText}>Sign in</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#060404',
    paddingTop: 81,
    paddingHorizontal: 20,
  },
  container: {
    // backgroundColor: 'white',
    // padding: 20,
    // paddingTop: 30,
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
    borderWidth: 0.5,
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
});
