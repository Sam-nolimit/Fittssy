import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  ActivityIndicator,
} from 'react-native';

interface BottomComponentProps {
  title: string | any; // Title can be string or any other type
  disabled?: boolean;
  icon?: JSX.Element;
  onPress: () => void;
  iconSize?: number;
  backgroundColor?: string;
  loading?: boolean;
  activityIndicator?: boolean; // New prop to control the visibility of ActivityIndicator
}

const BottomComponent: React.FC<BottomComponentProps> = ({
  title,
  disabled = false,
  icon,
  onPress,
  iconSize = 20,
  backgroundColor = '#28CC9E',
  loading = false,
  activityIndicator = true, // Default to true, meaning the ActivityIndicator will be shown
}) => {
  // Ensure title is always a string
  const normalizedTitle = typeof title === 'string' ? title : String(title);

  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableOpacity
        style={styles.option}
        onPress={disabled || loading ? undefined : onPress}
        disabled={disabled || loading}>
        {icon && (
          <Image
            source={icon}
            style={[styles.icon, {width: iconSize, height: iconSize}]}
          />
        )}
        {loading && activityIndicator && (
          <ActivityIndicator size="small" color="#FFFFFF" />
        )}
        <Text style={styles.optionText}>{normalizedTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 20,
    height: 50,
  },
  option: {
    padding: 10,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Karla-SemiBold',
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default BottomComponent;
