import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';

import { HomeScreen } from './containers';

/*
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'
*/

export const Stack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
}, {
  initialRouteName: 'HomeScreen',
});

/*
export const Tabs = createTabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Stack },
}, {
  order: ['TabA', 'TabB', 'TabC'];
});
*/

export const Drawer = createDrawerNavigator({
  Stack: { screen: Stack },
  // Tabs: { screen: Tabs },
});
