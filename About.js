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
            <View style={styles.container}>
                <Hamburger 
                    active={this.state.active}
                    type="cross"
                    onPress={() => {
                        this.setState({active: !this.state.active});
                        this.props.navigation.navigate('DrawerOpen');
                    }}
                />
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
  