/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './app/redux/reducers/root-reducer';
import UIHandler from './app/components/containers/UIHandler';
import StatusBarBackground from './app/components/presentational/StatusBarBackground';

const store = createStore(RootReducer);

class App extends Component {

  render() {
    return (
        <View style={styles.container}>
          <StatusBarBackground />
          <Provider store={store}>
            <UIHandler />
          </Provider>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;