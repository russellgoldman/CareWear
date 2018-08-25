import React, { Component } from 'react';
import { TouchableOpacity, Image, Dimensions } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';
import { NavigationActions } from 'react-navigation';

import { hamburger } from '../../assets/images';

class DrawerButton extends Component {
  constructor(props) {
    super(props);
  }

  buttonPress = () => {
    this.props.navigation.openDrawer();
  };

  render() {
    console.log(this.props.navigation);
    const { imageContainer } = styles;

    return (
      <TouchableOpacity style={imageContainer} onPress={() => this.buttonPress()}>
        <ResponsiveImage source={hamburger} initWidth="60" initHeight="60" />
      </TouchableOpacity>
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
