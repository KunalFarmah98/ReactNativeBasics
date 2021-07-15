import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import HomeScreen from '../screens/HomeScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImagesScreen'
import CounterScreen from '../screens/CounterScreen'
import MultipleStateScreen from '../screens/MultipleStateScreen';
import MultipleStateScreenReducer from '../screens/MultipleStateScreenReducer';



const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    MultipleState: MultipleStateScreen,
    MultipleState2: MultipleStateScreenReducer

  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  },
);

export default createAppContainer(navigator);
