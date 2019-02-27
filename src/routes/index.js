import { createStackNavigator } from 'react-navigation';
import LandingScreen from '../components/LandingScreen';
import CreateForm from '../components/CreateForm';


// const Stack = createStackNavigator({
//   LandingScreen: {
//     screen: LandingScreen,
//   },
// });
const AppNavigator = createStackNavigator(
  {
    Home: LandingScreen,
    CreateForm,
  },
  {
    initialRouteName: 'Home',
  },
);
export default AppNavigator;
