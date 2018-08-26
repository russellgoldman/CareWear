import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import ResponsiveImage from 'react-native-responsive-image';

import { caution, danger } from '../../assets/images';

class AlertGroup extends Component {
  constructor(props) {
    super(props);
    // props: statuses: ['status1', 'status2']
  }

  renderStatusImage(index, statusImageStyle) {
    if (this.props.statusArr[index] === 'Danger') {
      return (
        <ResponsiveImage source={danger} initWidth="40" initHeight="40"/>
      );
    } else {
      return (
        <ResponsiveImage source={caution} initWidth="40" initHeight="40"/>
      );
    }
  }

  render () {
    const {
      outerContainer,
      alertContainerTop,
      alertContainerBottom,
      statusImageStyle,
    } = styles;

    return (
      <View style={outerContainer}>
        <View style={alertContainerTop}>
          <View style={{ display: 'flex', flex: 2, justifyContent: 'center',
            alignItems: 'center' }}>
            {this.renderStatusImage(0, statusImageStyle)}
          </View>
          <View style={{ flex: 8, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', marginBottom: '2.5%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginRight: '5%' }}>
                {this.props.mostRecentAlert.status.toUpperCase()}
              </Text>
              <Text style={{ fontSize: 12 }}>
                {`${this.props.mostRecentAlert.date} - `}
              </Text>
              <Text style={{ fontSize: 12 }}>
                {this.props.mostRecentAlert.time}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>
                {this.props.mostRecentAlert.notice}
              </Text>
            </View>
          </View>
        </View>
        <View style={alertContainerBottom}>
          <View style={{ display: 'flex', flex: 2, justifyContent: 'center',
            alignItems: 'center' }}>
            {this.renderStatusImage(1, statusImageStyle)}
          </View>
          <View style={{ flex: 8, justifyContent: 'center' }}>
            <View style={{ flexDirection: 'row', marginBottom: '2.5%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 12, marginRight: '5%' }}>
                {this.props.secondRecentAlert.status.toUpperCase()}
              </Text>
              <Text style={{ fontSize: 12 }}>
                {`${this.props.secondRecentAlert.date} - `}
              </Text>
              <Text style={{ fontSize: 12 }}>
                {this.props.secondRecentAlert.time}
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 12 }}>
                {this.props.secondRecentAlert.notice}
              </Text>
            </View>
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
    backgroundColor: '#fff',
    borderRadius: 10,
    marginLeft: '5%',
    marginRight: '5%',
    top: '2%',
  },
  alertContainerTop: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#D7D7D7',
    height: '50%',
  },
  alertContainerBottom: {
    flex: 1,
    flexDirection: 'row',
    height: '50%',
  },
  statusImageStyle: {
    height: 20,
    width: 20,
  },
};

export default AlertGroup;
