import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';

export default class About extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <Text>This is infoooo</Text>
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
    },
    actionButton: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: 20,
        zIndex: 1
    }
  });
  