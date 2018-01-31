import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class About extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
  