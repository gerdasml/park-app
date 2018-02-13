import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';

export default class Loading extends Component {
    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Text>This is loading screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });