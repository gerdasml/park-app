import React, {Component} from 'react';
import Router from './src/config/routes';
import {View, AppRegistry } from 'react-native';
import { Asset, AppLoading } from 'expo';

export default class App extends Component {
  render () {
      return (
        <Router/>
      );
    }
}

AppRegistry.registerComponent('App', () => App);

