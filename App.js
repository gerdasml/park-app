import React from 'react';
import Router from './routes';
import {AppRegistry} from 'react-native';

export default class CustomDrawer extends React.Component {
  render () {
    return (
      <Router/>
    );
  }
}

AppRegistry.registerComponent('CustomDrawer', () => CustomDrawer);
