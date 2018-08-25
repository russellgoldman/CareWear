import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font } from 'expo';
import { DrawerButton } from '../components';
import { HomeScreenStyles } from '../styles';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CareWear',
    };
  }

  componentDidMount() {
    Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/OpenSans/OpenSans-Bold.ttf'),
    });
  }

  render() {
    const {
      homeScreenContainer,
      headerBarContainer,
      drawerButtonContainer,
      titleContainer,
      addUserContainer,
      titleStyle,
      addUserStyle,
    } = HomeScreenStyles;

    return (
      <View style={homeScreenContainer}>
        <View style={headerBarContainer}>
          <DrawerButton style={drawerButtonContainer}
            navigation={this.props.navigation} />
          <View style={titleContainer}>
            <Text style={titleStyle}>{this.state.title}</Text>
          </View>
          <View style={addUserContainer}>
            <Text style={addUserStyle}>Add Device</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
