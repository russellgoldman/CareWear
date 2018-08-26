import React, { Component } from 'react';
import { createDrawerNavigator, createStackNavigator, createTabNavigator } from 'react-navigation';

import { HomeScreen, CurrentStatsInformation, AlertLog } from './containers';

/*
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'
*/

export const HomeStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  CurrentStats: {
    screen: CurrentStatsInformation,
    navigationOptions: {
      header: null,
    },
  },
  AlertLogs: {
    screen: AlertLog,
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
  'Home': { screen: HomeStack },
  'Current Stats': { screen: CurrentStatsInformation },
  'Alert Logs': { screen: AlertLog },
});
