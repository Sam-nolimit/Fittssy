import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import CustomText from '../../components/text';
import BottomComponent from '../../components/bottom';
import {AuthContext} from '../../context/authContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false); // Separate focus state for username
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [formErrors, setFormErrors] = useState({username: '', password: ''});
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignInDisabled, setIsSignInDisabled] = useState(true);
  const navigation = useNavigation();

  const {login} = useContext(AuthContext);

  const handlePress = async () => {
    setUsernameError(false);
    setPasswordError(false);

    const isValid = validateForm();
    if (isValid) {
      setLoading(true);
      try {
        await AsyncStorage.setItem('username', username);
        await AsyncStorage.setItem('password', password);

        setTimeout(() => {
          setLoading(false);
          login();
        }, 3000);
      } catch (error) {
        console.log('Error saving credentials:', error);
        setLoading(false);
      }
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!username.trim()) {
      errors.username = 'Email Address is required';
      setUsernameError(true);
    } else if (!isValidEmail(username)) {
      errors.username = 'Invalid Email Address';
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }

    if (!password.trim()) {
      errors.password = 'Password is required';
      setPasswordError(true);
    } else if (password.length < 6 || password.length > 12) {
      errors.password = 'Password must be between 6 to 12 characters';
      setPasswordError(true);
    } else if (!containsNumberAndSpecialChar(password)) {
      errors.password =
        'Password must contain at least one number and one special character';
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const containsNumberAndSpecialChar = password => {
    return (
      /[0-9]/.test(password) &&
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)
    );
  };

  const handleUsernameChange = username => {
    setUserName(username);
    if (username.trim() && isValidEmail(username)) {
      setUsernameError(false);
    } else {
      setUsernameError(true);
    }
  };

  const handlePasswordChange = value => {
    setPassword(value);
    if (!value.trim()) {
      setPasswordError(true);
    } else if (value.length < 6 || value.length > 12) {
      setPasswordError(true);
    } else if (!containsNumberAndSpecialChar(value)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(prev => !prev);
  };

  const handleSignInPress = () => {
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    const loadPreviousCredentials = async () => {
      try {
        const savedUsername = await AsyncStorage.getItem('username');
        const savedPassword = await AsyncStorage.getItem('password');

        if (savedUsername) {
          setUserName(savedUsername);
        }
        if (savedPassword) {
          setPassword(savedPassword);
        }
      } catch (error) {
        console.log('Error loading previous credentials:', error);
      }
    };

    loadPreviousCredentials();
  }, []);

  useEffect(() => {
    const newIsSignInDisabled =
      !username.trim() || !password.trim() || usernameError || passwordError;
    setIsSignInDisabled(newIsSignInDisabled);
  }, [username, password, usernameError, passwordError]);

  return (
    <View style={styles.mainContainer}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <CustomText bold={true} style={{color: 'white', fontSize: 25}}>
          Welcome back!
        </CustomText>

        <View style={styles.inputContainer}>
          <Text
            style={[
              styles.inputText,
              isUsernameFocused && styles.focusedText,
              usernameError && styles.errorText,
            ]}>
            Email Address
          </Text>
          <View
            style={[
              styles.nameSection,
              isUsernameFocused && styles.focusedBorder,
              usernameError && styles.errorBorder,
            ]}>
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              placeholderTextColor="white"
              keyboardType="email-address"
              underlineColorAndroid="transparent"
              onChangeText={handleUsernameChange}
              value={username}
              onFocus={() => setIsUsernameFocused(true)}
              onBlur={() => setIsUsernameFocused(false)}
            />
          </View>
          {formErrors.username && (
            <Text style={styles.error}>{formErrors.username}</Text>
          )}
        </View>

        <Text
          style={[
            styles.inputText,
            isPasswordFocused && styles.focusedText,
            passwordError && styles.errorText,
          ]}>
          Password
        </Text>
        <View
          style={[
            styles.nameSection,
            isPasswordFocused && styles.focusedBorder,
            passwordError && styles.errorBorder,
          ]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TextInput
              style={styles.input}
              placeholder="********"
              placeholderTextColor="white"
              secureTextEntry={!passwordVisible}
              underlineColorAndroid="transparent"
              onChangeText={handlePasswordChange}
              value={password}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
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
        {formErrors.password && (
          <Text style={styles.error}>{formErrors.password}</Text>
        )}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleForgotPasswordPress}
            style={styles.forgotPasswordButton}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <BottomComponent
            title={loading ? 'Signing In...' : 'Sign In'}
            onPress={handlePress}
            disabled={isSignInDisabled}
            faded={isSignInDisabled}
            activityIndicator={true}
            loading={loading}
          />
        </View>

        <View style={styles.divider}>
          <View style={styles.underline} />
          <Text style={styles.orText}>Or</Text>
          <View style={styles.underline} />
        </View>

        {/* Additional social sign-in buttons */}
        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Google"
            backgroundColor="#222222"
            icon={require('../../assets/icons/appleIcon.png')}
            iconSize={24}
          />
        </View>

        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Continue with Apple ID"
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
  input: {
    width: '100%',
    height: 40,
    color: 'white',
    fontFamily: 'Karla-SemiBold',
    paddingHorizontal: 20,
    fontSize: 16,
  },
  inputText: {
    fontSize: 15,
    color: '#ffffff',
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Karla-ExtraBold',
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
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
  focusedBorder: {
    borderColor: '#28CC9E',
  },
  focusedText: {
    color: '#28CC9E',
  },
  bottom: {
    bottom: -200,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: '#28CC9E',
    marginLeft: 10,
  },
  forgotPasswordButton: {
    paddingHorizontal: 10,
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: '#28CC9E',
    fontSize: 14,
    textDecorationLine: 'underline',
    fontFamily: 'Karla-Bold',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default SignIn;
