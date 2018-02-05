import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, Image, Text, StatusBar} from 'react-native';

export default class Point extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.cover}>
                    <Text style={styles.whiteText}>Nykstuko chata</Text>
                </View>
                <View style={styles.icon}/>
                <View style={styles.info}>
                    <Text style={styles.blackText}>Stotele</Text>
                    <Text style={styles.infoText}>This is info about uganda knuckles</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff'
    },
    cover: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.3,
        justifyContent: 'flex-start',
        backgroundColor: 'yellow'
    },
    info: {
        backgroundColor: 'pink',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.7
    },
    icon: {
        backgroundColor: 'green',
        width: 100,
        height: 100,
        position: 'absolute',
        marginTop: Dimensions.get('window').height * 0.22,
        marginLeft: Dimensions.get('window').width * 0.65,
        zIndex: 1
    },
    whiteText: {
        color: 'white',
        fontSize: 32,
        position: 'absolute',
        top: Dimensions.get('window').height * 0.22
    },
    blackText: {
        color: 'black',
        fontSize: 32
    },
    infoText: {
        position: 'absolute',
        top: Dimensions.get('window').height * 0.1
    }
  });
  