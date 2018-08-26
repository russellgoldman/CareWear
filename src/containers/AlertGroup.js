import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { caution, danger } from '../../assets/images';

class AlertGroup extends Component {
  constructor(props) {
    super(props);
    // props: statuses: ['status1', 'status2']
  }

  renderSymbol(index) {
    if (this.props.statusArr[index] === 'Danger') {
      return (
        <ResponsiveImage source={danger} initWidth="20" initHeight="20" />
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
      alertContainer
    } = styles;

    console.log(this.props.statusArr);

    return (
      <View style={outerContainer}>
        <View style={alertContainer}>
          <View>{this.renderSymbol(0)}</View>
          <View>
            <View></View>
            <View></View>
          </View>
        </View>
        <View>
          <View>{this.renderSymbol(1)}</View>
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
  alertContainer: {
    flex: 1,
  },
};

export default AlertGroup;
