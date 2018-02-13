import React, {Component} from 'react';
import Router from './routes';
import {View, AppRegistry } from 'react-native';
import { Asset, AppLoading } from 'expo';
import Loading from './Loading';

export default class App extends Component {
  state = {
    isReady: true,
  };

  componentDidMount() {
    setTimeout(() => this.setState({isReady: false}), 3000);
  }
  render () {
    if (this.state.isReady) {
      return (
        <Loading/>
      );
    }
      
      return (
        <Router/>
      );
    }
}

AppRegistry.registerComponent('App', () => App);

