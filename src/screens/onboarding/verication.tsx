import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BottomComponent from '../../components/bottom';
import Header from '../../components/header';
import {useNavigation} from '@react-navigation/native';

const Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isFocused, setIsFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    // Simulate loading for 2 seconds
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Perform verification logic here
      navigation.navigate('Dashboard');
    }, 2000);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Verification</Text>
        <Text style={styles.subtitle}>
          Please check your email for the PIN code.
        </Text>

        <View style={styles.inputContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              style={[styles.input, isFocused && styles.focusedText]}
              value={digit}
              onChangeText={value => handleOtpChange(index, value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
            />
          ))}
        </View>

        <View style={styles.bottomContainer}>
          <BottomComponent
            title="Verify"
            onPress={handlePress}
            isLoading={isLoading}
          />

          <TouchableOpacity onPress={() => {}} style={styles.resendContainer}>
            <Text style={styles.resendText}>Resend PIN code</Text>
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
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  container: {
    flexGrow: 1,
    // justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'Karla-Bold',
  },
  subtitle: {
    color: 'gray',
    fontSize: 15,
    fontFamily: 'Karla-Regular',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  input: {
    width: '15%',
    height: 50,
    backgroundColor: '#171717',
    color: 'white',
    fontFamily: 'Karla-Regular',
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  bottomContainer: {
    marginTop: 20,
  },
  resendContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  resendText: {
    color: 'white',
    fontFamily: 'Karla-Bold',
    textDecorationLine: 'underline',
  },
  focusedText: {
    borderColor: '#28CC9E',
    borderWidth: 1,
  },
});

export default Verification;
