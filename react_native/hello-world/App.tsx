import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ComponentScreen from './src/screens/ComponentScreen';
import HomeScreen from './src/screens/HomeScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
  },
  {
    initialRouteName: 'Components',
    defaultNavigationOptions: {
      title: 'Hello World'
    }
  }
);

export default createAppContainer(navigator);
