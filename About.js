import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions, Button, StatusBar } from 'react-native';
import Hamburger from 'react-native-hamburger';

export default class About extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: true
        }
    }
    render() {
        return (
            <View>
                <View style={styles.actionButton}>
                    <Hamburger 
                        active={false}
                        type="cross"
                        onPress={() => {
                            this.props.navigation.navigate('DrawerOpen');
                        }}
                        />
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
        height: 40
    }
  });
  