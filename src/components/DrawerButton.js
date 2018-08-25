import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { hamburger } from '../../assets/images';

class DrawerButton extends Component {
  render() {
    const { imageContainer } = styles;

    return (
      <View style={imageContainer}>
        <ResponsiveImage source={hamburger} initWidth="60" initHeight="60" />
      </View>
    );
  };
}

const styles = {
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    right: '7%',
    bottom: '2%',
  },
};

export default DrawerButton;
