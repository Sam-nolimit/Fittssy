import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

interface BottomComponentProps {
  title: string[];
  disable?: boolean;
  icon?: JSX.Element;
  onPress: () => void;
  iconSize?: number;
}

interface BottomComponentProps {
  title: string[];
  disable?: boolean;
  icon?: JSX.Element;
  onPress: () => void;
  iconSize?: number;
  backgroundColor?: string;
}

const BottomComponent: React.FC<BottomComponentProps> = ({
  title,
  disable,
  icon,
  onPress,
  backgroundColor = '#28CC9E',
  iconSize = 20,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <TouchableOpacity
        style={styles.option}
        onPress={disable ? undefined : onPress}>
        {icon && (
          <Image
            source={icon as ImageSourcePropType}
            style={[styles.icon, {width: iconSize, height: iconSize}]}
          />
        )}
        <Text style={styles.optionText}>{title}</Text>
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
  selectedOption: {
    backgroundColor: '#28CC9E',
  },
  optionText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Karla-SemiBold',
  },

  icon: {
    marginRight: 10,
  },
});

export default BottomComponent;
