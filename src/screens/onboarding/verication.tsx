import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import BottomComponent from '../../components/bottom';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/headerGoback';

const Verification = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isFocused, setIsFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [expired, setExpired] = useState(false);
  const [remainingTime, setRemainingTime] = useState(20);
  const [resendPressed, setResendPressed] = useState(false);
  const navigation = useNavigation();
  const inputRefs = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(prevTime => {
        if (prevTime === 0) {
          clearInterval(interval);
          setExpired(true);
          setLoading(false); // Stop loading if it's still in progress
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handlePress = () => {
    // Simulate loading for 2 seconds
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Perform verification logic here
      navigation.navigate('Dashboard');
    }, 2000);
  };

  const handleOtpChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (value.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleResend = () => {
    setResendPressed(true);
    // Logic for resending PIN code can be added here
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
              ref={ref => (inputRefs.current[index] = ref)}
            />
          ))}
        </View>
        <Text style={styles.timerText}>
          {expired
            ? 'Verification expired.'
            : `Time remaining: ${Math.floor(remainingTime / 60)}:${
                remainingTime % 60
              }`}
        </Text>
        <View style={styles.bottomContainer}>
          <BottomComponent
            title={loading ? 'Verifying' : 'Verify'}
            onPress={handlePress}
            loading={loading}
          />
        </View>
        {expired && resendPressed ? (
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Resending...</Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={handleResend}
            style={styles.resendContainer}>
            <Text style={styles.resendText}>Resend PIN code</Text>
          </TouchableOpacity>
        )}

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
  timerText: {
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Karla-Bold',
  },
});

export default Verification;
