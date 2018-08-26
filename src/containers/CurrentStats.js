import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { CurrentStatsStyles } from '../styles';

class CurrentStats extends Component {
  constructor() {
    super();
    this.state = {
      time: '11:52AM',
      date: '12/03/18',
    };
  }

  render() {
    const {
      outerContainer,
      currentStatsTextStyle,
      updateInfoContainer,
      lastUpdatedStyle,
      seeMoreStyle,
      statsGroup,
    } = CurrentStatsStyles;

    return (
      <View style={outerContainer}>
        <Text style={currentStatsTextStyle}>Current Stats</Text>
        <View style={updateInfoContainer}>
          <Text style={lastUpdatedStyle}>
            {`Last updated at ${this.state.time} on ${this.state.date}`}
          </Text>
          <Text style={seeMoreStyle}>SEE MORE</Text>
        </View>
        <View style={statsGroup}>
          <View>
            <View>
              <ResponsiveImage initWidth="150" initHeight="150"/>
            </View>
            <View></View>
            <View></View>
          </View>
          <View>
            <View></View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    );
  }
}

export default CurrentStats;
