import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { DrawerButton } from '../components';

class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      victimName: 'Roast Beef',
    };
  }

  render() {
    return (
      <View>
        <View>
          <DrawerButton />
          <Text>{this.state.victimName}</Text>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
