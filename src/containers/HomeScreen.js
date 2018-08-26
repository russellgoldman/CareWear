import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import ResponsiveImage from 'react-native-responsive-image';

import { CurrentStats } from '../containers';
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

  renderStatus() {
    var color = '#000';   // default
    switch (this.state.status) {
      case 'Safe':
        color = '#6AB186';
        break;
      case 'Caution':
        color = '#FFD976';
        break;
      case 'Danger':
        color = '#FF7676';
        break;
    }
    if (color !== '#000') {
      return (
        <Text style={{ paddingTop: '2%', fontSize: 25, fontWeight: 'bold', color: `${color}` }}>
          {this.state.status}
        </Text>
      );
    } else {
      return (
        <Text style={{ paddingTop: '2%', fontSize: 25, fontWeight: 'bold', color: '#000' }}>
          N/A
        </Text>
      );
    }

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
      victimBottomInfoContainer,
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
            <TouchableOpacity style={addUserContainer} onPress={() => {
              console.log('Go to add device screen!');
            }}>
              <Text style={addUserStyle}>Add Device</Text>
            </TouchableOpacity>
          </View>
          <View style={victimTopInfoContainer}>
            <View style={victimImageContainer}>
              <ResponsiveImage source={roastBeef} initWidth="150" initHeight="150" />
            </View>
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={victimNameStyle}>{this.state.victimName}</Text>
            </View>
          </View>
          <View style={victimBottomInfoContainer}>
            <View style={{ flex: 1 }} />
            <View style={statusContainer}>
              <Text style={{ fontSize: 13, color: '#3d3d3d' }}>CURRENT STATUS</Text>
              {this.renderStatus()}
            </View>
          </View>
          <View style={{ flex: 3 }}>
            <CurrentStats />
          </View>
          <View style={{ flex: 2 }}></View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
