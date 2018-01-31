import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    static navigationOptions = {
        title: 'Map'
    };

    openAbout = () => {
        this.props.navigation.navigate('About');
    }

    render() {
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
                <Button
                    onPress={this.openAbout}
                    title='About'
                    color='#841584'
                    accessibilityLabel='Learn more about this purple button'
                    style={styles.actionButton}
                />
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
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 200,
        zIndex: -1
    },
    actionButton: {
        position: 'relative',
        width: Dimensions.get('window').width,
        height: 20,
        zIndex: 1
    }
  });
  