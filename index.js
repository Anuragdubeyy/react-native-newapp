/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
// import App from './App';
//import AppPro from './AppPro';
import AppNavigator from './component/AppNavigator';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
//AppRegistry.registerComponent(appName, () => AppPro);
