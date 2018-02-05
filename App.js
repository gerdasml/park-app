import React, {Component} from 'react';
import Router from './routes';
import {View, AppRegistry } from 'react-native';

export default class App extends Component {
  render () {
    return (
        <Router/>
    );
  }
}

AppRegistry.registerComponent('App', () => App);
