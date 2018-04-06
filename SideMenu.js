import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import { StyleSheet, ScrollView, Text, View, StatusBar} from 'react-native';
import Hamburger from 'react-native-hamburger';

export default class SideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
        active: false
    }
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true}/>
        <View style={styles.buttonDiv}>
          <Hamburger 
              style={{position: 'absolute', right: '-50%'}}
              active={true}
              type="cross"
              onPress={() => {
                console.log(this.props.navigation);
                this.props.navigation.navigate('DrawerToggle');
              }}
              />
        </View>
        <ScrollView> 
          <View>
            <Text style={styles.sectionHeadingStyle}>
              Section 1
            </Text>
            <View style={styles.navSectionStyle}>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('About')}>
                About map
              </Text>
              <Text style={styles.navItemStyle} onPress={this.navigateToScreen('Map')}>
                Map
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1
    },
    navItemStyle: {
        padding: 10
    },
    navSectionStyle: {
        backgroundColor: 'lightgrey'
    },
    sectionHeadingStyle: {
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    footerContainer: {
        padding: 20,
        backgroundColor: 'lightgrey'
    },
    buttonDiv: {
      width: 400,
      zIndex: 5,
      paddingLeft: 260,
      position: "absolute"
    }
});
  