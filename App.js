/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './app/redux/reducers/root-reducer';
import UIHandler from './app/components/pages/UIHandler';

const store = createStore(RootReducer);

export default class App extends Component {

  render() {
    return (
      // <Provider store={store}>
        <UIHandler />
      // </Provider>
    );
  }
}
