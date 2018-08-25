import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Font } from 'expo';
import ResponsiveImage from 'react-native-responsive-image';

import { DrawerButton, TopWhiteSpace } from '../components';
import { HomeScreenStyles } from '../styles';
import { roastBeef, homeScreenBackground } from '../../assets/images';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CareWear',
      victimName: 'Roast Beef',
      status: 'Safe',
    };
  }

  render() {
    const {
      homeScreenContainer,
      backgroundImage,
      headerBarContainer,
      drawerButtonContainer,
      titleContainer,
      titleStyle,
      addUserContainer,
      addUserStyle,
      victimTopInfoContainer,
      victimImageContainer,
      victimNameStyle,
      statusContainer,
    } = HomeScreenStyles;

    return (
      <View style={{ flex: 1 }}>
        <TopWhiteSpace />
        <ImageBackground source={homeScreenBackground} style={homeScreenContainer}>
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
          <View style={victimTopInfoContainer}>
            <View style={victimImageContainer}>
              <ResponsiveImage source={roastBeef} initWidth="150" initHeight="150" />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={victimNameStyle}>{this.state.victimName}</Text>
            </View>
          </View>
          <View style={{
            flex: 2, flexDirection: 'row', alignItems: 'flex-start',
            top: '2.5%',
          }}>
            <View style={{ flex: 1 }} />
            <View style={statusContainer}>
              <Text>CURRENT STATUS</Text>
              <Text>{this.state.status}</Text>
            </View>
          </View>
          <View style={{ flex: 3 }}></View>
          <View style={{ flex: 2 }}></View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
