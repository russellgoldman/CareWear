import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { HeaderBar } from '../containers';
import { TopWhiteSpace } from '../components';
import { alertLog } from '../../assets/images';

class CurrentStatsInformation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <ImageBackground source={alertLog}
          style={{ width: '100%', height: '100%' }}>
          <View style={{ marginTop: '10%' }}/>
          <HeaderBar navigation={this.props.navigation}/>
        </ImageBackground>
      </View>
    );
  }
}

export default CurrentStatsInformation;
