import React from 'react';
import { View, Text, Image } from 'react-native';

const VariableGroup = (props) => {
  const { logo, value, variableName } = props;
  const {
    groupContainer,
    logoStyle,
    valueContainerStyle,
    valueTextStyle,
    variableContainerStyle,
    variableNameStyle,
  } = styles;

  return (
    <View style={groupContainer}>
      <View style={{ justifyContent: 'center', marginTop: '5%', marginBottom: '5%', }}>
        <Image source={logo} style={logoStyle} />
      </View>
      <View style={valueContainerStyle}>
        <Text style={valueTextStyle}>{value}</Text>
      </View>
      <View style={variableContainerStyle}>
        <Text style={variableNameStyle}>{variableName.toUpperCase()}</Text>
      </View>
    </View>
  );
};

const styles = {
  groupContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    top: '2.5%',
  },
  logoStyle: {
    flex: 1,
    maxHeight: 25,
    maxWidth: 25,
    resizeMode: Image.resizeMode.contain,
  },
  valueContainerStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  valueTextStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6EAFC4',
    marginBottom: '3%',
  },
  variableContainerStyle: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: '10%',
    marginRight: '10%',
    justifyContent: 'flex-start',
  },
  variableNameStyle: {
    fontSize: 12,
    color: '#000',
    opacity: 0.8,
    textAlign: 'center',
  },
};

export default VariableGroup;
