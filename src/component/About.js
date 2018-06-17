import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class About extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <View>
                <View style={styles.actionButton}>
                    <Ionicons
                        name="md-menu"
                        size={32}
                        onPress={() => {
                        console.log(this.props.navigation);
                        this.props.navigation.navigate('DrawerOpen');
                        }}/>
                </View>
                    <StatusBar hidden={true}/>
                    <View>
                        <Text>This is infoooo</Text>
                    </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
      flex: 1,
      backgroundColor: '#fff'
    },
    actionButton: {
        justifyContent: 'flex-start',
        width: Dimensions.get("window").width,
        height: 40,
        paddingLeft: 10
    }
  });
  