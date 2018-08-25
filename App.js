import React from 'react';
import { Drawer } from './src/Navigators';

// for testing
console.disableYellowBox = true;

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}
