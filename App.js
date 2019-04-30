import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import About from './src/pages/About';
import HomeScreen from './src/pages/HomeScreen';
import Setting from './src/pages/Setting';
import DemoCanvas from './src/pages/Canvas';
import Webview from './src/pages/Webview';
import ImagePickeDemo from './src/pages/ImagePicke';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    About: About,
    Setting: Setting,
    Canvas: DemoCanvas,
    Webview: Webview,
    ImagePickeDemo: ImagePickeDemo
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
