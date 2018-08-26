import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { caution, danger } from '../../assets/images';

class AlertGroup extends Component {
  constructor(props) {
    super(props);
    // props: statuses: ['status1', 'status2']
  }

  renderStatusImage(index) {
    if (this.props.statusArr[index] === 'Danger') {
      return (
        <ResponsiveImage source={danger} initWidth="50" initHeight="50" />
      );
    } else {
      return (
        <ResponsiveImage source={caution} initWidth="20" initHeight="20" />
      );
    }
  }

  render () {
    const {
      outerContainer,
      alertContainerTop,
    } = styles;

    console.log(this.props.statusArr);

    return (
      <View style={outerContainer}>
        <View style={alertContainerTop}>
          <View style={{ flex: 1 }}>{this.renderStatusImage(0)}</View>
          <View style={{ flex: 6 }}>
            <View></View>
            <View></View>
          </View>
        </View>
        <View>
          <View>{this.renderStatusImage(1)}</View>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  outerContainer: {
    display: 'flex',
    flex: 1,
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
    top: '2%',
  },
  alertContainerTop: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#D7D7D7',
    maxHeight: '50%',
  },
};

export default AlertGroup;
