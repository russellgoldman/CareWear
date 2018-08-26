import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { DrawerButton, TopWhiteSpace } from '../components';

class HeaderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'CareWear',
    };
  }

  render() {
    const {
      headerBarContainer,
      drawerButtonContainer,
      titleContainer,
      titleStyle,
      addUserContainer,
      addUserStyle,
    } = styles;

    return (
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
    );
  }
}

const styles = {
  headerBarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.8,
    backgroundColor: '#fff',
    maxHeight: '7%',
  },
  drawerButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  titleStyle: {
    fontSize: 15,
    color: '#3d3d3d',
    right: '0.5%',
  },
  addUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  addUserStyle: {
    fontSize: 13,
    color: '#4871EE',
    left: '15%',
  },
};

export default HeaderBar;
