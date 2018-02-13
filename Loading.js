import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }
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