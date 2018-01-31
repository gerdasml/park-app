import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Map from './Map';
import About from './About';

export default App = StackNavigator({
  Map: {screen: Map},
  About: {screen: About}
});
