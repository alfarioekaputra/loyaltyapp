import Expo from 'expo';
import React from 'react';
import Main from './src/Main';
import { StyleSheet, Text, View, Button } from 'react-native';
import {Icon} from 'native-base';
import {
  StackNavigator,
} from 'react-navigation';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
  });

    this.setState({ isReady: true });
  }
  render() {
    console.disableYellowBox = true;
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return <Main />;
  }
}