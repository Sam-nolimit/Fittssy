import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationProp = StackNavigationProp<RootStackParamList>;
const useTypeSafeNavigation = () => {
  const navigation = useNavigation<NavigationProp>();

  return navigation;
};

export default useTypeSafeNavigation;
