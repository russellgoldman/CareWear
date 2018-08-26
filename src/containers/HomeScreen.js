import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import ResponsiveImage from 'react-native-responsive-image';

import { CurrentStats, AlertGroup } from '../containers';
import { DrawerButton, TopWhiteSpace } from '../components';
import { HomeScreenStyles } from '../styles';
import { roastBeef, homeScreenBackground } from '../../assets/images';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CareWear',
      victimName: 'Baxter',
      status: 'Safe',
      alertState: {
        mostRecentAlert: {
          status: 'Caution',
          date: 'August 12th, 2018',
          time: '9:12 PM',
          notice: '+ 3 Degrees Celsius raise in temperature',
        },
        secondRecentAlert: {
          status: 'Danger',
          date: 'August 12th, 2018',
          time: '9:12 PM',
          notice: '+ 3 Degrees Celsius raise in temperature',
        },
      },
    };
  }

  renderStatus() {
    var color = '#000';   // default
    switch (this.state.status) {
      case 'Safe':
        color = '#6AB186';
        break;
      case 'Caution':
        color = '#FFA800';
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
      alertTitleRow,
      recentAlertsTextStyle,
      seeMoreStyle,
    } = HomeScreenStyles;

    var statusArr = [
      this.state.alertState.mostRecentAlert.status,
      this.state.alertState.secondRecentAlert.status,
    ];

    var { mostRecentAlert, secondRecentAlert } = this.state.alertState;

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
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'flex-start' }}>
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
          <View style={{ flex: 4, bottom: '5%', }}>
            <CurrentStats />
          </View>
          <View style={{ flex: 2.2, bottom: '5.5%', }}>
            <View style={alertTitleRow}>
              <Text style={recentAlertsTextStyle}>Recent Alerts</Text>
              <TouchableOpacity style={{ display: 'flex', justifyContent: 'center' }} onPress={() => { console.log('See more!'); }}>
                <Text style={seeMoreStyle}>SEE MORE</Text>
              </TouchableOpacity>
            </View>
            <AlertGroup statusArr={statusArr} mostRecentAlert={mostRecentAlert} secondRecentAlert={secondRecentAlert} />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default HomeScreen;
