import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import useTypeSafeNavigation from '../hooks/useTypeSafeNavigation';
import {useNavigation} from '@react-navigation/native';

type DrawListType = {
  id: number;
  title: string;
  navigate: string;
  icon: any; // Adjust the type of icon according to your requirement
};

type Props = {
  item: DrawListType;
  active: SharedValue<boolean>;
};

const DrawerList = ({active, item}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        active.value = false;
        // navigation.navigate(item.navigate as keyof RootStackParamList);
        console.log(item.navigate);
        navigation.navigate(`${item.navigate}`);
      }}
      style={styles.container}>
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.textName}>{item.title}</Text>
    </TouchableOpacity>
  );
};

export default DrawerList;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    gap: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textName: {
    fontFamily: '',
    fontWeight: '700',
    fontSize: 17,
    color: '#000000',
  },
});
