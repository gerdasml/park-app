import React, {Component} from 'react';
import { StyleSheet, View, Dimensions, Image, Text, StatusBar} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class Point extends Component {
    render() {
        const param = this.props.navigation.state.params;
        return (
            <View style={styles.container}>
                <StatusBar hidden={true}/>
                <View style={styles.actionButton}>
                    <Ionicons
                        name="md-menu"
                        size={32}
                        onPress={() => {
                        console.log(this.props.navigation);
                        this.props.navigation.navigate('DrawerOpen');
                        }}/>
                </View>
                <View style={styles.cover}>
                    <Text style={styles.whiteText}>{param.name}</Text>
                </View>
                <View style={styles.icon}/>
                <View style={styles.info}>
                    <Text style={styles.blackText}>{param.type}</Text>
                    <Text style={styles.infoText}>{param.description}</Text>
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
    },
    actionButton: {
        //justifyContent: 'flex-start',
        width: Dimensions.get("window").width,
        height: 40,
        paddingLeft: 10,
        position: 'absolute',
        zIndex: 1
    }
  });
  